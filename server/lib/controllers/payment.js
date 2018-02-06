// TODO(s):
//  * remove stripe test token into the config file
//  * Validate phone numbers ... add Mongoose utility method for this??
//  *

var PayService = require('../models/payment');
var Account = require('../models/acct');
var Device = require('../models/device');

var stripe = require('stripe')(
  'sk_test_eRBp8qHGu85QbvpLlaoOd5Qe'
);

// ===================================================================
// Inputs: stripeCardToken
// Response:
//  * success, { card details }; ||
//  * error, 'couldn't add payment method';
//
// Prereq - requires:
//  * device must be linked to Group Account
//  * if GroupAccount doesn't have any existing PayServices linked, a new
//    Stripe Customer must be created first
//
// Flow:
//  * use phoneNumber to get masterAcctNum via Device
//  * use accountId (masterAcct) to find payment services connected to
//      the Group Account
//
exports.newPaymentMethod = function(req, res, next) {
  var singleUseCardToken = req.body.stripeCardToken;
  var DGTphoneNumber = req.phoneNumber;

  Device.findOne({phoneNumber: DGTphoneNumber}, function(err, device) {
    if (err || !device) {
      return next(new Error('Device not registered. Must registered to add PaySource'));
    }

    // Device must be linked to GroupAccount in order to add a payment service
    if (device.masterAcct) {
      // check if any payments exist with GroupAccountID
      // if none exist, create new Payment Service Customer first
      // Finally store link b/w Group Account and Payment Service in DB
      PayService.findOne({GroupAccountID: device.masterAcct}, function(err, service) {
        if (err) { return next(new Error('Problem finding existing Payment Service')); }
        if (!service) {
          // Create Stripe customer and add new Payment Source in one call
          stripe.customers.create({source: singleUseCardToken}, function(err, customer) {
            // Link GroupAccount to Stripe Customer via customerID
            var svc = new PayService({
              serviceName: 'stripe',
              customerID: customer.id,
              GroupAccountID: device.masterAcct,
              acctPhoneNumber: DGTphoneNumber
            });

            svc.save(function(err) {
              if (err) { return next(new Error('Unable to save new Payment Service')); }
              res.json({message: 'New Customer Created. New Card Payment also added'});
            });
          });
        } else {
          // else a stripe account exists, so use existing customerID
          stripe.customers.createSource(service.customerID, {source: singleUseCardToken}, function(err, card) {
            if (err) { return next(new Error('Unable to create Card for EXISTING Stripe Customer')); }
            res.json({message: 'New Card Payment added',
                      status: 'success',
                      data: {
                        cardStripeID: card.id,
                        cardLast4: card.last4,
                        cardBrand: card.brand
                      }
            });
          });
        }
      });
    } else {
      return next(new Error('Device requires GroupAccount before adding pay services'));
    }
  });
};

// ===================================================================
// Description:
// Inputs: stripeCardID
// Response:
//  * success: { status; "success", data: {} }
//  * error: 'Unable to remove payment method'
//
// Prereq - requires:
//  * device must be registered with SG
//  * a Stripe Payment Service must be connected to Group Account
//
// Flow:
//  * use phoneNumber to get masterAcctNum via Device
//  * use masterAcctNum to get stripeCustomerID via Account
//  * delete payment method via stripe API
//
exports.removePaymentMethod = function(req, res) {
  var cardStripeID = req.body.cardStripeID;
  var DGTphoneNumber = req.phoneNumber;

  // Make sure calling device is registered in SG system first
  Device.findOne({phoneNumber: DGTphoneNumber}, function(err, device) {
    if (err || !device) {
      return next(new Error('Device not registered. Must be registered to delete PaySource'));
    }

    // Get Stripe customerID via an existing Stripe Payment service
    PayService.findOne({GroupAccountID: device.masterAcct}, function(err, service) {
      if (err || !service) {
        return next(new Error('Payment Service Not Found - required for this action'));
      }

      stripe.customers.deleteCard(
        service.customerID,
        cardStripeID,
        function(err, confirmation) {
          if (err) { return next(new Error('Unable to remove payment method')); }
          res.status(200).json({
            "status": "success",
            "message": "Payment Source successfully removed.",
            "data": {}
          });
      });
    });
  });
};

// ===================================================================
// Description: List All Cards for the device customer
// Inputs: phoneNumber {String} via Digits
// Response:
//  * success, { list-of-cards }; ||
//  * error, 'couldn't add payment method';
//
// Prereq - requires:
//  * device must be registered with SG
//  * device must be linked to a Group Account
//  * at least one Payment Service must be connected to Group Account
//
// Flow:
//  * use phoneNumber to get masterAcctNum via Device
//  * use accountId (masterAcct) to find payment services connected to
//      the Group Account
//  * use customerID from pay service to get list of cards
exports.listPaymentSources = function(req, res) {
  var DGTphoneNumber = req.phoneNumber;

  console.log('Next, retrieve Device info');
  Device.findOne({phoneNumber: DGTphoneNumber}, function(err, device) {
    if (err || !device) {
      return next(new Error('Device not registered. Must registered to add PaySource'));
    }

    // Device must be linked to GroupAccount in order to add a payment service
    if (device.masterAcct) {
      // check if any payments exist with GroupAccountID
      PayService.findOne({GroupAccountID: device.masterAcct}, function(err, service) {
        if (err || !service) {
          return next(new Error('Payment Service Not Found - required for this action'));
        }
        var default_source = '';
        var cardProjection = {};
        var cardList = [];
        // get default card from customer in order to tag the appropriate
        //    default card in the list of cards below
        stripe.customers.retrieve(
          service.customerID,
          function(err, customer) {
            default_source = customer.default_source;
            stripe.customers.listCards(service.customerID, function(err, cards) {
              cards.data.forEach(function(card) {
                cardProjection.cardStripeID = card.id;
                cardProjection.cardLast4 = card.last4;
                cardProjection.cardBrand = card.brand;
                cardProjection.cardFunding = card.funding;
                cardProjection.cardCountry = card.country;
                cardProjection.default = "false";

                if (default_source === card.id) {
                  cardProjection.default = "true";
                }

                cardList.push(cardProjection);
              });
              res.send(cardList);
            });
        });
      });
    } else {
      return next(new Error('Device requires GroupAccount before requesting Payment information'));
    }
  });
};

// ===================================================================
// Description: List All Charges for the device/customer
// Inputs:
//  * phoneNumber {String} via Digits
//
// Response:
//  * success: { list-of-charges }; ||
//  * error:
//
// Prereq - requires:
//  * device must be registered with SG
//  * device must have a payment source already set up with Stripe
//
// Flow:
//  * use phoneNumber to get masterAcctNum via Device
//  * use accountId (masterAcct) to find payment services connected to
//      the Group Account
//  * use customerID from pay service to get list of cards
//
exports.listCharges = function(req, res) {
  // Get custID from phone#
  var DGTphoneNumber = req.phoneNumber;

  Device.findOne({phoneNumber: DGTphoneNumber}, function(err, device) {
    if (err || !device) {
      return next(new Error('Device not registered. Must registered to add PaySource'));
    }

    // Device must be linked to GroupAccount in order to add a payment service
    if (device.masterAcct) {
      // check if any payments exist with GroupAccountID
      PayService.findOne({GroupAccountID: device.masterAcct}, function(err, service) {
        if (err || !service) {
          return next(new Error('Payment Service Not Found - required for this action'));
        }

        var chargesList = [];
        stripe.charges.list({
          customer: service.customerID,
          limit: 10
          }, function(err, charges) {
            charges.data.forEach(function(charge) {
              chargesList.push({
                "chargeID": charge.id,
                "chargeCreated": charge.created,
                "chargePaid": charge.paid,
                "chargeStatus": charge.status,
                "chargeAmount": charge.amount,
                "chargeCurrency": charge.currency,
                "chargeSourceID": charge.source.id
              });
            });
            res.status(200).json({
              "status": "success",
              "message": "List of charges retrieved.",
              "data": chargesList
            });
          });
      });
    } else {
      return next(new Error('Device requires GroupAccount before requesting Payment information'));
    }
  });
};


// ===================================================================
// Description: Create a Charge
// Inputs:
//  * phoneNumber {String} via Digits
//
// Response:
//  * success: { new-default-source-ID }; ||
//  * error:
//
// Prereq - requires:
//  * device must be registered with SG
//  * device must have a payment source already set up with Stripe
//
// Flow:
//  * use phoneNumber to get masterAcctNum via Device
//  * use accountId (masterAcct) to find payment services connected to
//      the Group Account
//  * use customerID from pay service to generate a charge through
//    the default payment source
//
exports.createCharge = function(req, res, next) {
  var DGTphoneNumber = req.phoneNumber;
  var amount = req.body.amount;
  var currencyType = 'usd';

  Device.findOne({phoneNumber: DGTphoneNumber}, function(err, device) {
    if (err || !device) {
      return next(new Error('Device not registered. Must registered to add PaySource'));
    }

    // Device must be linked to GroupAccount in order to add a payment service
    if (device.masterAcct) {
      // check if any payments exist with GroupAccountID
      PayService.findOne({GroupAccountID: device.masterAcct}, function(err, service) {
        if (err || !service) {
          return next(new Error('Payment Service Not Found - required for this action'));
        }

        stripe.charges.create({
          amount: amount,
          currency: currencyType,
          customer: service.customerID,
          description: 'Charge for DataSession'
        }, function(err, charge) {
          if (err) {
            var newErr = new Error('Unexpected Stripe response');
            var body = {};
            body.stripeErr = {};
            body.stripeErr = err;
            newErr.body = body;
            return next(newErr);
          }
          res.status(200).json({
            "chargeID": charge.id,
            "chargeCreated": charge.created,
            "chargePaid": charge.paid,
            "chargeStatus": charge.status,
            "chargeAmount": charge.amount,
            "chargeCurrency": charge.currency,
            "chargeSourceID": charge.source.id
          });
        });
      });
    } else {
      return next(new Error('Device requires GroupAccount before requesting Payment information'));
    }
  });
};

// ===================================================================
// Description: Set a new Default Payment Source
// Inputs:
//  * phoneNumber {String} via Digits
//  * cardStripeID
//
// Response:
//  * success: { default-source-ID }; ||
//  * error:
//
// Prereq - requires:
//  * device must be registered with SG
//  * device must have a payment service (Stripe) already set up
//  * device must have a payment source already set up with Stripe
//
// Flow:
//  * use phoneNumber to get masterAcctNum via Device
//  * use accountId (masterAcct) to find payment services connected to
//      the Group Account
//  * use customerID from pay service to set the new default source
//
exports.setDefaultPaymentSource = function(req, res) {
  var cardStripeID = req.body.cardStripeID;
  var DGTphoneNumber = req.phoneNumber;

  Device.findOne({phoneNumber: DGTphoneNumber}, function(err, device) {
    if (err || !device) {
      return next(new Error('Device not registered. Must registered to add PaySource'));
    }

    // Device must be linked to GroupAccount in order to add a payment service
    if (device.masterAcct) {
      // check if any payments exist with GroupAccountID
      PayService.findOne({GroupAccountID: device.masterAcct}, function(err, service) {
        if (err || !service) {
          return next(new Error('Payment Service Not Found - required for this action'));
        }

        stripe.customers.update(
          service.customerID, {
          default_source: cardStripeID
        }, function(err, customer) {
          res.status(200).json({
            "status": "success",
            "message": "New Default Payment Source",
            "data": {
              "newDefault": customer.default_source
            }
          });
        });
      });
    } else {
      return next(new Error('Device requires GroupAccount before requesting Payment information'));
    }
  });
};

// ===================================================================
// Description: Get the Default Payment Source
// Inputs:
//  * phoneNumber {String} via Digits
//  * cardStripeID
//
// Response:
//  * success: { default-source-ID }; ||
//  * error:
//
// Prereq - requires:
//  * device must be registered with SG
//  * device must have a payment service (Stripe) already set up
//  * device must have a payment source already set up with Stripe
//
// Flow:
//  * use phoneNumber to get masterAcctNum via Device
//  * use accountId (masterAcct) to find payment services connected to
//      the Group Account
//  * use customerID from pay service to get the default source
//
exports.getDefaultPaymentSource = function(req, res) {
  // get phoneNumber from Digits auth response
  // get stripeCustomerID via phoneNumber
  // get Customer via stripeCustomerID
  // retrieve defaultCard using Customer defaultCardID
  // send response with defaultCard details
  var DGTphoneNumber = req.phoneNumber;

  Device.findOne({phoneNumber: DGTphoneNumber}, function(err, device) {
    if (err || !device) {
      return next(new Error('Device not registered. Must registered to add PaySource'));
    }

    // Device must be linked to GroupAccount in order to add a payment service
    if (device.masterAcct) {
      // check if any payments exist with GroupAccountID
      PayService.findOne({GroupAccountID: device.masterAcct}, function(err, service) {
        if (err || !service) {
          return next(new Error('Payment Service Not Found - required for this action'));
        }

        stripe.customers.retrieve(
          service.customerID,
          function(err, customer) {
            res.status(200).json({
              "status": "success",
              "message": "Fetched Default Payment Source",
              "data": {
                "defaultSource": customer.default_source
              }
            });
          }
        );
      });
    } else {
      return next(new Error('Device requires GroupAccount before requesting Payment information'));
    }
  });
};

// ===================================================================
// Description: Report if any payment services exist for device
// Inputs:
//  * phoneNumber {String} via Digits
//
// Response:
//  * success: YES || NO
//  * error:
//
// Prereq - requires:
//  * device must be registered with SG
//
// Flow:
//  * use phoneNumber to get masterAcctNum via Device
//  * use accountId (masterAcct) to check if ANY payment services connected to
//      the Group Account
//
exports.anyPaymentsAvailable = function(req, res, next) {
  // get device masterAcctNum - to find master Account
  //  ... then check if master Account has any pymt methods
  Device.findOne({'phoneNumber': req.phoneNumber}, function(err, device) {
    if (err || !device) {
      return next(new Error('Device not registered. Must registered to add PaySource'));
    }

    // Device must be linked to GroupAccount in order to add a payment service
    if (device.masterAcct) {
      // check if any payments exist with GroupAccountID
      PayService.findOne({GroupAccountID: device.masterAcct}, function(err, service) {
        if (err) {
          return next(new Error('Payment Service Not Found - required for this action'));
        }

        var isService = !service ? 'NO' : 'YES';
        res.json({payment: isService});
      });
    } else {
      return next(new Error('Device requires GroupAccount before requesting Payment information'));
    }
  });
};


