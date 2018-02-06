import { Component, OnInit, AfterViewInit } from '@angular/core';



import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientsService, Client } from '../../../services/clients.service';
import { UsersService, User } from '../../../services/users.service';

import { CompaniesService, Company } from '../../../services/companies.service';
import { CategoriesService, Category } from '../../../services/categories.service';
import { CompleterData } from 'ng2-completer';
import { NotificationsService } from 'angular2-notifications';
import { Categories } from '../categories/categories.component';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'companies',
  styleUrls: [('./companies.scss')],
  templateUrl: './companies.html',
})

export class Companies {

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'email';
    sortOrder = 'asc';
    currentUser: any;
    public loading: boolean; 
    source: LocalDataSource;
    categories: any;
    originCategories: any;
    settings;
    language;
    options = {
      position:["top", "right"],
      timeOut:3000,
      lastOnBottom: true,
      clickToClose: true,
      animation: 'scale',
      showProgressBar: false,
      maxLength: 100
    }

    constructor(private dataService: UsersService, private modalService: NgbModal, private companyiesServices: CompaniesService, private _service: NotificationsService, private cagetoriesService: CategoriesService, private _langService: LanguageService) {
      this.loading = true;
      this.source = new LocalDataSource();

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      if(localStorage.getItem('lang')=='de'){
        this._langService.getDEJSON().then(data => {
        console.log("12345678", data);  
        this.language=data;
      })
      } else {
        this._langService.getENJSON().then(data => {
          console.log("12345678", data);  
          this.language=data;
        })
      }

    this.cagetoriesService.getStatusCategories().then(data=>{
      this.originCategories = data;

      this.categories = data.map((obj)=>{
        var newObj={};
        newObj['value'] = obj.description; 
        newObj['title']=obj.description;
        return newObj;
      });

      this.companyiesServices.getCompanies().then(data => {
      this.data = data;
      console.log(data);
      if(this.originCategories === null) return;
      for(var i=0; i<data.length; i++){
        for(var j=0; j<this.originCategories.length; j++){
          if(data[i].categories === this.originCategories[j]._id){
            data[i].categories=this.originCategories[j].description;
          }
        }
      }

      if(localStorage.getItem('lang')==="en"){
            this.settings = {
              add: {
                addButtonContent: '<i class="ion-ios-plus-outline"></i>',
                createButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
                confirmCreate: true,
              },
              edit: {
                editButtonContent: '<i class="ion-edit"></i>',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
                confirmSave: true,
              },
              delete: {
                deleteButtonContent: '<i class="ion-trash-a"></i>',
                confirmDelete: true,
              },
              columns: {
                name: {
                  title: 'Company Name',
                  type: 'string',
                },
                email: {
                  title: 'E-mail',
                  type: 'string'
                },
                fax: {
                  title: 'FAX',
                  type: 'number'
                },
                phoneNumber: {
                  title: 'Phone Number',
                  type:'string'
                },
                zip: {
                  title: 'Zip code',
                  type: 'number'
                },
                city: {
                  title: 'City',
                  type: 'number'
                },
                street: {
                  title: 'Street',
                  type: 'number'
                },
                country: {
                  title: 'Country',
                  type: 'number'
                },
                latitude: {
                  title: 'Latitude',
                  type: 'string'
                },
                longitude: {
                  title: 'Longitude',
                  type: 'string'
                },
                categories: {
                  title: 'Category',
                  type: 'html',
                  editor: {
                    type: 'list',
                    config: {
                      list: this.categories,
                    },
                  },
                },
                status: {
                  title: 'Status',
                  type: 'number',
                  filter: {
                    type: 'checkbox',
                    config: {
                      true: 'true',
                      false: 'false',
                      resetText: 'clear',
                    },
                  },
                  editor: {
                    type: 'checkbox',
                    config: {
                      true: true,
                      false: false,
                    },
                  },
                },
                appoconftemplate: {
                  title: 'Appointment Confirmation Template',
                  type: 'string'
                },
                apponottemplate: {
                  title: 'Appointment Notification Template',
                  type: 'string'
                },
                appoconfemail: {
                  title: 'Appointment Confirmation Email',
                  type: 'boolean',
                  filter: {
                    type: 'checkbox',
                    config: {
                      true: 'true',
                      false: 'false',
                      resetText: 'clear',
                    },
                  },
                  editor: {
                    type: 'checkbox',
                    config: {
                      true: true,
                      false: false,
                    },
                  },
                },
                appoconfsms: {
                  title: 'Appointment Confirmation SMS',
                  type: 'boolean',
                  filter: {
                    type: 'checkbox',
                    config: {
                      true: 'true',
                      false: 'false',
                      resetText: 'clear',
                    },
                  },
                  editor: {
                    type: 'checkbox',
                    config: {
                      true: true,
                      false: false,
                    },
                  },
                },
                apponotemail: {
                  title: 'Appointment Notification Email',
                  type: 'boolean',
                  filter: {
                    type: 'checkbox',
                    config: {
                      true: 'true',
                      false: 'false',
                      resetText: 'clear',
                    },
                  },
                  editor: {
                    type: 'checkbox',
                    config: {
                      true: true,
                      false: false,
                    },
                  },
                },
                apponotsms: {
                  title: 'Appointment Notification SMS',
                  type: 'boolean',
                  filter: {
                    type: 'checkbox',
                    config: {
                      true: 'true',
                      false: 'false',
                      resetText: 'clear',
                    },
                  },
                  editor: {
                    type: 'checkbox',
                    config: {
                      true: true,
                      false: false,
                    },
                  },
                },
              }
            };
           } else {
            this.settings = {
              add: {
                addButtonContent: '<i class="ion-ios-plus-outline"></i>',
                createButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
                confirmCreate: true,
              },
              edit: {
                editButtonContent: '<i class="ion-edit"></i>',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
                confirmSave: true,
              },
              delete: {
                deleteButtonContent: '<i class="ion-trash-a"></i>',
                confirmDelete: true,
              },
              columns: {
                name: {
                  title: 'Anbieter',
                  type: 'string',
                },
                email: {
                  title: 'E-mail',
                  type: 'string'
                },
                fax: {
                  title: 'Fax',
                  type: 'string'
                },
                phoneNumber: {
                  title: 'Telefon',
                  type:'number'
                },
                zip: {
                  title: 'PLZ',
                  type: 'number'
                },
                city: {
                  title: 'Ort',
                  type: 'string'
                },
                street: {
                  title: 'Straße',
                  type: 'string'
                },
                country: {
                  title: 'Land',
                  type: 'string'
                },
                latitude: {
                  title: 'Breite',
                  type: 'string'
                },
                longitude: {
                  title: 'Länge',
                  type: 'string'
                },
                categories: {
                  title: 'Kategorie',
                  type: 'html',
                  editor: {
                    type: 'list',
                    config: {
                      list: this.categories,
                    },
                  },
                },
                status: {
                  title: 'Aktiv',
                  filter: {
                    type: 'checkbox',
                    config: {
                      true: 'true',
                      false: 'false',
                      resetText: 'clear',
                    },
                  },
                  editor: {
                    type: 'checkbox',
                    config: {
                      true: true,
                      false: false,
                    },
                  },
                },
                appoconftemplate: {
                  title: 'Terminbestätigungsvorlage',
                  type: 'string'
                },
                apponottemplate: {
                  title: 'Terminbenachrichtigungsvorlage',
                  type: 'string'
                },
                appoconfemail: {
                  title: 'Terminbestätigungs-E-Mail',
                  type: 'number',
                  filter: {
                    type: 'checkbox',
                    config: {
                      true: 'true',
                      false: 'false',
                      resetText: 'clear',
                    },
                  },
                  editor: {
                    type: 'checkbox',
                    config: {
                      true: true,
                      false: false,
                    },
                  },
                },
                appoconfsms: {
                  title: 'Terminbestätigung SMS',
                  type: 'number',
                  filter: {
                    type: 'checkbox',
                    config: {
                      true: 'true',
                      false: 'false',
                      resetText: 'clear',
                    },
                  },
                  editor: {
                    type: 'checkbox',
                    config: {
                      true: true,
                      false: false,
                    },
                  },
                },
                apponotemail: {
                  title: 'Terminbenachrichtigungs-E-Mail',
                  type: 'number',
                  filter: {
                    type: 'checkbox',
                    config: {
                      true: 'true',
                      false: 'false',
                      resetText: 'clear',
                    },
                  },
                  editor: {
                    type: 'checkbox',
                    config: {
                      true: true,
                      false: false,
                    },
                  },
                },
                apponotsms: {
                  title: 'Terminbenachrichtigung SMS',
                  type: 'number',
                  filter: {
                    type: 'checkbox',
                    config: {
                      true: 'true',
                      false: 'false',
                      resetText: 'clear',
                    },
                  },
                  editor: {
                    type: 'checkbox',
                    config: {
                      true: true,
                      false: false,
                    },
                  },
                },
              }
            };
           }

           this.source.load(data);
           this.loading = false;
    }); 

    })

    
  }
  ngOnInit() {

  }
  removeCompany(event){
    if (window.confirm(this.language.message.deleteconfirm)) {
        let index = this.data.findIndex(obj => obj._id === event.data._id);
        this.companyiesServices.delete(this.data[index]._id);
        if(index>-1){
          this.data.splice(index, 1);
          this.source.load(this.data);
          this.showSuccessToast(this.language.message.success, this.language.message.companyremoved);
        }
    }
  }

  validateEmail(email): Boolean {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  onCreateConfirm(event): void { 

  if(event.newData.name===""){
      this.showErrorToast(this.language.message.info, this.language.message.inputname); return;
    } else if(event.newData.email===""){
      this.showErrorToast(this.language.message.info, this.language.message.inputemail); return;
    } else if (!this.validateEmail(event.newData.email)){
      this.showErrorToast(this.language.message.info, this.language.message.emailcorrectly);
      return;   
    } 

    if (window.confirm(this.language.message.createconfirm)) {
        event.confirm.resolve();
        this.saveCompany(event.newData);
    } else {
      event.confirm.reject();
    }
   

  } 

  onEditConfirm(event): void {

    if(event.newData.name===""){
      alert(this.language.message.inputcompanyname); return;
    } else if(event.newData.email===""){
      alert(this.language.message.inputemail); return;
    } else if (!this.validateEmail(event.newData.email)){
      alert(this.language.message.emailcorrectly); 
      return;   
    } 

    if(event.newData.companyName === "Other" ){
      window.alert(this.language.message.selectcompanyname);
      return;
    }

    if (window.confirm(this.language.message.updateconfirm)) {
        event.confirm.resolve();
        this.saveCompany(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  saveCompany(newData) {
    let saveData = new Company();
    
    saveData.name = newData.name;
    saveData.email = newData.email;
    saveData.phoneNumber = newData.phoneNumber;
    saveData.street = newData.street;
    saveData.zip = newData.zip;
    saveData.city = newData.city;
    saveData.country = newData.country;
    saveData.fax = newData.fax;
    saveData.status = newData.status;
    saveData.latitude = newData.latitude;
    saveData.longitude = newData.longitude;

    saveData.appoconfemail = newData.appoconfemail;
    saveData.appoconfsms = newData.appoconfsms;
    saveData.apponotemail = newData.apponotemail;
    saveData.apponotsms = newData.apponotsms;

    saveData.appoconftemplate = newData.appoconftemplate;
    saveData.apponottemplate = newData.apponottemplate;

    //saveData.categories = newData.categories;
    for(var i=0; i<this.originCategories.length; i++){
      if(this.originCategories[i].description===newData.categories){
        saveData.categories = this.originCategories[i]._id;
      }
    }

    if(newData._id == undefined){
      this.companyiesServices.create(saveData).then(company => {
         this.data.shift();
         company.categories = newData.categories;
         this.data.unshift(company);
         this.source.load(this.data);
         this.showSuccessToast(this.language.message.success, this.language.message.companycreated);
       });
    } else {
      this.companyiesServices.update(saveData, newData._id).then(user => {
         this.companyiesServices.getCompanies().then(data => {
            this.data = data;
           
            if(this.originCategories === null) return;
            for(var i=0; i<data.length; i++){
              for(var j=0; j<this.originCategories.length; j++){
                if(data[i].categories === this.originCategories[j]._id){
                  data[i].categories=this.originCategories[j].description;
                }
              }
            }
            
            this.source.load(this.data);
          });
          
          this.showSuccessToast(this.language.message.success, this.language.message.companyupdated);
       });
    }
  }

  showSuccessToast(title, content){
    this._service.success(
      title,
      content,
      this.options
    )
  }
  showErrorToast(title, content){
    this._service.info(
      title,
      content,
      this.options
    )
  }
  showWaningToast(title, content){
    this._service.warn(
      title,
      content,
      this.options
    )
  }

}
