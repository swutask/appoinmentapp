import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { CalendarEdit } from './settings-edit/calendar-edit/calendar-edit.component';
import { ServiceEdit } from './settings-edit/service-edit/service-edit.component';
import { CalendarService, Calendar } from '../../../services/calendars.service';
import { ServicesService, Service } from '../../../services/services.service';
import { OpeningHoursService, OpeningHours } from '../../../services/openinghours.service';
import { LocalDataSource } from 'ng2-smart-table';
import { NotificationsService } from 'angular2-notifications';
import { LanguageService } from '../../../services/language.service';
import { CompaniesService } from '../../../services/companies.service';

@Component({
  selector: 'settings-tables',
  templateUrl: './settingsTables.html',
  styleUrls: ['./settingsTables.scss']
})

export class SettingsTables implements OnInit {

    data = [];
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "email";
    sortOrder = "asc";
    calendars: any;
    services: any[];
    openingHours: any;
    public loading: boolean; 
    
    starttime: '08:30:00';
    endtime: '17:30:00';
    
    currentUser: any;

    source_calendar: LocalDataSource;
    settings_calendar;

    source_service: LocalDataSource;
    settings_service;
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

    appoconfemail: Boolean = false;
    appoconfsms: Boolean = false;
    apponotemail: Boolean = false;
    apponotsms: Boolean = false;

    constructor( private modalService: NgbModal, 
                private calendarService: CalendarService, 
                private servicesService: ServicesService,
                private openinghourService: OpeningHoursService,
                private _service: NotificationsService,
                private _langService: LanguageService,
                private companyService: CompaniesService  )
   {

   
      this.openingHours = new Array();

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.openinghourService.getOpeningHourse(this.currentUser.user.companyID).then((data) => {
          this.openingHours = data;
          console.log("22222==>", this.openingHours);
      });

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

      this.source_calendar = new LocalDataSource();
      this.source_service = new LocalDataSource();

      this.companyService.getCompaniesByID(this.currentUser.user.companyID).then((data) => {
        if(data) {
          this.appoconfemail = data['appoconfemail'];
          this.appoconfsms = data['appoconfsms'];
          this.apponotemail = data['apponotemail'];
          this.apponotsms = data['apponotsms'];
        }
      });
    }

    
    ngOnInit() {
      this.loading = true;
      this.calendarService.getCalendars(this.currentUser.user.companyID).then((data) => {
        this.calendars = data;
        if(localStorage.getItem('lang')==="en"){
            this.settings_calendar = {
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
                description: {
                  title: 'Calendar Name',
                  type: 'string',
                  class:'wide_calendar'
                },
                status: {
                  title: 'Status',
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
            this.settings_calendar = {
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
                description: {
                  title: 'Kalendar',
                  type: 'string',
                  class: 'wide_calendar',
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
              }
            };
           }
           this.source_calendar.load(this.calendars);
            
      });

      this.servicesService.getServices(this.currentUser.user.companyID).then((data) => {
        this.services = data;
        if(localStorage.getItem('lang')==="en"){
            this.settings_service = {
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
                description: {
                  title: 'Service Name',
                  type: 'string',
                  class: 'wide',
                },
                price: {
                  title: 'Price',
                  type: 'number',
                  class: 'wide',
                },
                duration: {
                  title: 'Duration',
                  type: 'number',
                  class: 'wide',
                },
                shortKey: {
                  title: 'shortKey',
                  type: 'string',
                  class: 'wide',
                },
                status: {
                  title: 'Status',
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
            this.settings_service = {
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

                description: {
                  title: 'Services',
                  type: 'string',
                  class:'wide'
                },
                price: {
                  title: 'Preis',
                  type: 'number',
                  class:'wide'
                },
                duration: {
                  title: 'Dauer',
                  type: 'number',
                  class:'wide'
                },
                status: {
                  title: 'Aktiv',
                  width:'20%',
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
           this.source_service.load(this.services);
            this.loading = false;
      });
    }

    saveNotificationreference() {

      // this.appoconfemail!=this.appoconfemail;
      // this.appoconfsms!=this.appoconfsms;
      // this.apponotemail!=this.apponotemail;
      // this.apponotsms!=this.apponotsms;

      var args = {
        company_id: this.currentUser.user.companyID,
        appoconfemail: this.appoconfemail,
        appoconfsms: this.appoconfsms,
        apponotemail: this.apponotemail,
        apponotsms: this.apponotsms
      }

      this.companyService.saveNotificationPref(args).then((data) => {
        this.showSuccessToast(this.language.message.success, "Notification preference saved");
      });

    }

    removeCalendar(event){
      if (window.confirm(this.language.message.deleteconfirm)) {
        let index = this.calendars.findIndex(obj => obj._id === event.data._id);
        this.calendarService.delete(this.calendars[index]._id);
        if(index>-1){
          this.calendars.splice(index, 1);
          this.source_calendar.load(this.calendars);
          this.showSuccessToast(this.language.message.success, this.language.message.calendarremoved);
        }
      }
    }

    onEditConfirm_Calendar(event){
      if(event.newData.companyName === "Other" ){
      window.alert(this.language.message.selectcompanyname);
      return;
      }

      if (window.confirm(this.language.message.updateconfirm)) {
          event.confirm.resolve();
          this.saveCalendar(event.newData);
      } else {
        event.confirm.reject();
      }
    }

    onCreateConfirm_Calendar(event){
      if (window.confirm(this.language.message.createconfirm)) {
        event.confirm.resolve();
        this.saveCalendar(event.newData);
      } else {
        event.confirm.reject();
      }
    }

    saveCalendar(newData) {
      let saveData = new Calendar();
      
      saveData.description = newData.description;
      saveData.status = newData.status;
      saveData.companyID = this.currentUser.user.companyID;
      if(newData._id == undefined){
        this.calendarService.create(saveData).then(calendar => {
          console.log(calendar)
          this.calendars.shift();
          this.calendars.unshift(calendar);
          this.source_calendar.load(this.calendars);
        });
        this.showSuccessToast(this.language.message.success, this.language.message.calendarcreated);
      } else {
        this.calendarService.update(saveData, newData._id).then(calendar => {
            this.showSuccessToast(this.language.message.success, this.language.message.calendarupdated);
        });
      }
  }

   removeService(event){
      if (window.confirm(this.language.message.deleteconfirm)) {
        let index = this.services.findIndex(obj => obj._id === event.data._id);
        this.servicesService.delete(this.services[index]._id);
        if(index>-1){
          this.services.splice(index, 1);
          this.source_service.load(this.services);
          this.showSuccessToast(this.language.message.success, this.language.message.serviceremoved);
        }
      }
    }

    onEditConfirm_Service(event){
      if(event.newData.companyName === "Other" ){
      window.alert(this.language.message.selectcompanyname);
      return;
      }

      if (window.confirm(this.language.message.updateconfirm)) {
          this.saveService(event.newData, event);
      } else {
        event.confirm.reject();
      }
    }

    onCreateConfirm_Service(event){

      if(!(event.newData.price>0)){
        this.showErrorToast(this.language.message.info, this.language.message.inputnumberprice);
        return;
      }
      if(!(event.newData.duration>0)){
        this.showErrorToast(this.language.message.info, this.language.message.inputnumberduration);
        return;
      }

      if (window.confirm(this.language.message.createconfirm)) {
        this.saveService(event.newData, event);
      } else {
        event.confirm.reject();
      }
    }

    saveService(newData, event) {
      let saveData = new Service();
      
      saveData.description = newData.description;
      saveData.price = newData.price;
      saveData.duration = newData.duration;
      saveData.status = newData.status;
      saveData.shortKey = newData.shortKey;
      saveData.companyID = this.currentUser.user.companyID;

      var short_key_available = true;

      if(newData.shortKey.length > 0) {
        if(newData._id == undefined){
          for(var k=0; k < this.services.length; k++) {
            if(this.services[k].shortKey.toLowerCase()==newData.shortKey.toLowerCase()) {
              short_key_available = false;
            }
          }
        } else {
          for(var k=0; k < this.services.length; k++) {
            if(this.services[k]._id!=newData._id) {
              if(this.services[k].shortKey.toLowerCase()==newData.shortKey.toLowerCase()) {
                short_key_available = false;
              }
            }
          }
        }
      }

      if(short_key_available==false) {
        this.showErrorToast(this.language.message.sorry, this.language.message.shortcutkeyexists);
        event.confirm.reject();
      } else {
        event.confirm.resolve();
        if(newData._id == undefined){
          this.servicesService.create(saveData).then(service => {
            console.log(service)
            this.services.shift();
            this.services.unshift(service);
            this.source_calendar.load(this.services);
            this.showSuccessToast(this.language.message.success, this.language.message.servicecreated);
          });
        } else {
          this.servicesService.update(saveData, newData._id).then(service => {
              this.showSuccessToast(this.language.message.success, this.language.message.serviceupdated);
          });
        }
      }
  }

    saveOpeiningHours() {
       console.log(this.openingHours);
      this.openinghourService.update(this.openingHours, this.currentUser.user.companyID).then((data) => {
          this.openingHours = data;
        this.showSuccessToast(this.language.message.success, this.language.message.openinghoursupdated);
      });
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
}
