webpackJsonp(["forgot.module"],{

/***/ "../../../../../src/app/pages/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forgot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Forgot = (function () {
    function Forgot(fb, router, userService, translate) {
        this.router = router;
        this.userService = userService;
        this.translate = translate;
        this.submitted = false;
        this.invalid = false;
        this.sendStatus = false;
        this.sendDone = false;
        this.form = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(4)])],
        });
        this.email = this.form.controls['email'];
        if (localStorage.getItem('lang') === "en") {
            this.translate.setDefaultLang('en');
        }
        else if (localStorage.getItem('lang') === "de") {
            this.translate.setDefaultLang('de');
        }
    }
    Forgot.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            this.userService.forgot(this.form.value).then(function (data) {
                //console.log("data===>", data);
                _this.sendDone = true;
                if (data['status'] == false) {
                    _this.invalid = true;
                }
                else {
                    _this.sendStatus = true;
                }
            }, function (error) {
                _this.invalid = true;
            });
        }
    };
    return Forgot;
}());
Forgot = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'forgot',
        template: __webpack_require__("../../../../../src/app/pages/forgot/forgot.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/forgot/forgot.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["b" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["b" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_translation_module__["a" /* AppTranslationModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_translation_module__["a" /* AppTranslationModule */]) === "function" && _d || Object])
], Forgot);

var _a, _b, _c, _d;
//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forgot/forgot.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-main\" style=\"background:rgba(58, 101, 148, 0.54);\">\r\n  <div class=\"auth-block\">\r\n    <h1 translate>{{'login.forgot-enter-email'}}</h1>\r\n    <!--<a routerLink=\"/register\" class=\"auth-link\" translate>{{'login.signup_link'}}</a>-->\r\n\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\" >\r\n      <div class = \"form-group row \" *ngIf = \"invalid==true && 1==2\" style = \"background-color:brown;height: 30px; margin: 15px 0px 15px 83px;\r\n    align-items: center;\r\n    padding: 10px;\">\r\n          Invalid User!\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\r\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\" translate>{{'login.email'}}</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"{{'login.email' | translate}}\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"offset-sm-2 col-sm-10\">\r\n          <div class=\"alert alert-danger\" *ngIf = \"invalid==true\">\r\n            Invalid User\r\n          </div>\r\n          <div class=\"alert alert-success\" *ngIf = \"sendStatus==true\">\r\n            Email sent successfully\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"offset-sm-2 col-sm-10\">\r\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\" translate>{{'login.enter_email'}}</button>\r\n          \r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <!--<div class=\"auth-sep\"><span><span translate>{{'login.sign_from_app_text'}}</span></span></div>\r\n\r\n    <div class=\"al-share-auth\">\r\n      <ul class=\"al-share clearfix\">\r\n        <li><i class=\"socicon socicon-facebook\" title=\"{{'login.share_on_facebook' | translate}}\"></i></li>\r\n        <li><i class=\"socicon socicon-twitter\" title=\"{{'login.share_on_twitter' | translate}}\"></i></li>\r\n        <li><i class=\"socicon socicon-google\" title=\"{{'login.share_on_google_plus' | translate}}\"></i></li>\r\n      </ul>\r\n    </div>\r\n  </div>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/forgot/forgot.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotModule", function() { return ForgotModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_translation_module__ = __webpack_require__("../../../../../src/app/app.translation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__("../../../../../src/app/theme/nga.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_component__ = __webpack_require__("../../../../../src/app/pages/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_routing__ = __webpack_require__("../../../../../src/app/pages/forgot/forgot.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ForgotModule = (function () {
    function ForgotModule() {
    }
    return ForgotModule;
}());
ForgotModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6__forgot_routing__["a" /* routing */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__forgot_component__["a" /* Forgot */],
        ]
    })
], ForgotModule);

//# sourceMappingURL=forgot.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forgot/forgot.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forgot_component__ = __webpack_require__("../../../../../src/app/pages/forgot/forgot.component.ts");


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__forgot_component__["a" /* Forgot */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=forgot.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/forgot/forgot.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #00abff; }\n    .auth-block a:hover {\n      color: #0091d9; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\n.btn-auth {\n  color: #ffffff !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=forgot.module.chunk.js.map