import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

import { ClientsEdit } from './clients-edit/clients-edit.component';
import { LocalDataSource, ViewCell  } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientsService, Client } from '../../../services/clients.service';
import { CustomCompanyComponent } from './custom_company.component';
import { User } from '../../../services/users.service';

import { CompaniesService } from '../../../services/companies.service';
import { CompleterData } from 'ng2-completer';
import { AppTranslationModule } from '../../../app.translation.module';
import { NotificationsService } from 'angular2-notifications';
import {Router} from '@angular/router';
import { LanguageService } from '../../../services/language.service';


@Component({
  selector: 'button-view',
  template: `
    <select><option>--Select--</option></select>
  `,
})
export class MultiSelectDropdownComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}

@Component({
  selector: 'clients-tables',
  templateUrl: './clientsTables.html',
  styleUrls: ['./clientsTables.scss'],
  
})
export class ClientsTables implements OnInit {

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'email';
    sortOrder = 'asc';
    currentUser: any;
    
    company_title:string;
    source: LocalDataSource;
    public loading: boolean; 
    settings;
    companies;any;

    options = {
      position:["top", "right"],
      timeOut:3000,
      lastOnBottom: true,
      clickToClose: true,
      animation: 'scale',
      showProgressBar: false,
      maxLength: 100
    }

    language:any;
  

    constructor(private dataService: ClientsService, 
                private modalService: NgbModal, 
                private companyiesServices: CompaniesService,
                private translate: AppTranslationModule,
                private _service: NotificationsService,
                private _langService: LanguageService
              ) {

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
   
    if(this.currentUser.user.role == "admin"){
      this.dataService.getAllClients().then((data) => {
            this.data = data;
            console.log(this.data);
           for(var i=0; i< data.length; i++){
             if(data[i].companyID.indexOf(this.currentUser.user.companyID)>-1){
              data[i]['companyName'] = this.company_title;
             } else {
               data[i]['companyName'] = "Other";
             }
           }
           if(localStorage.getItem('lang')==='en'){
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
                  firstName: {
                    title: 'First Name',
                    type: 'string',
                  },
                  lastName: {
                    title: 'Last Name',
                    type: 'string',
                  },
                  email: {
                    title: 'E-mail',
                    type: 'string'
                  },
                  country: {
                    title: 'Country',
                    type: 'number'
                  },
                  phoneNumber: {
                    title: 'Phone Number',
                    type: 'string'
                  },
                  street: {
                    title: 'Street',
                    type: 'string'
                  },
                  city: {
                    title: 'City',
                    type: 'string'
                  },
                  zip: {
                    title: 'Zip Code',
                    type: 'string'
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
                  firstName: {
                    title: 'Vorname',
                    type: 'string',
                  },
                  lastName: {
                    title: 'Nachname',
                    type: 'string',
                  },
                  email: {
                    title: 'E-mail',
                    type: 'string'
                  },
                  country: {
                    title: 'Land',
                    type: 'number'
                  },
                  phoneNumber: {
                    title: 'Telefon',
                    type: 'string'
                  },
                  street: {
                    title: 'Straße',
                    type: 'string'
                  },
                  city: {
                    title: 'Ort',
                    type: 'string'
                  },
                  zip: {
                    title: 'PLZ',
                    type: 'string'
                  },
                  
                }
              };
           }

           

           this.source.load(data);
            this.loading = false;
          });
    }


   

    if(this.currentUser.user.role =="company"){
      this.companyiesServices.getCompaniesByID(this.currentUser.user.companyID).then((data) => {
        this.company_title = data.name;


        this.dataService.getClients(this.currentUser.user.companyID).then((data) => {
            this.data = data;
            console.log(this.data);
           for(var i=0; i< data.length; i++){
             if(data[i].companyID.indexOf(this.currentUser.user.companyID)>-1){
              data[i]['companyName'] = this.company_title;
             } else {
               data[i]['companyName'] = "Other";
             }
           }
           if(localStorage.getItem('lang')==='en'){
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
                  firstName: {
                    title: 'First Name',
                    type: 'string',
                  },
                  lastName: {
                    title: 'Last Name',
                    type: 'string',
                  },
                  email: {
                    title: 'E-mail',
                    type: 'string'
                  },
                  country: {
                    title: 'Country',
                    type: 'number'
                  },
                  phoneNumber: {
                    title: 'Phone Number',
                    type: 'string'
                  },
                  street: {
                    title: 'Street',
                    type: 'string'
                  },
                  city: {
                    title: 'City',
                    type: 'string'
                  },
                  zip: {
                    title: 'Zip Code',
                    type: 'string'
                  },
                  companyName: {
                    title: 'Company',
                    show: false,
                    // renderComponent: MultiSelectDropdownComponent,
                    filter: {
                      type: 'list',
                      config: {
                        selectText: 'Select...',
                        list: [
                          { value: this.company_title , title: this.company_title },
                          // { value: 'Other', title: 'Other' },
                        ],
                      },
                    },
                    editor: {
                      type: 'list',
                      config: {
                        selectText: 'Select...',
                        list: [
                          { value: this.company_title , title: this.company_title },
                          // { value: 'Other', title: 'Other' },
                        ],
                      },
                    }
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
                  firstName: {
                    title: 'Vorname',
                    type: 'string',
                  },
                  lastName: {
                    title: 'Nachname',
                    type: 'string',
                  },
                  email: {
                    title: 'E-mail',
                    type: 'string'
                  },
                  country: {
                    title: 'Land',
                    type: 'number'
                  },
                  phoneNumber: {
                    title: 'Telefon',
                    type: 'string'
                  },
                  street: {
                    title: 'Straße',
                    type: 'string'
                  },
                  city: {
                    title: 'Ort',
                    type: 'string'
                  },
                  zip: {
                    title: 'PLZ',
                    type: 'string'
                  },
                  companyName: {
                    title: 'Anbieter',
                    show:false,
                    filter: {
                      type: 'list',
                      config: {
                        selectText: 'Select...',
                        list: [
                          { value: this.company_title , title: this.company_title },
                          // { value: 'Other', title: 'Other' },
                        ],
                      },
                    },
                    editor: {
                      type: 'list',
                      config: {
                        selectText: 'Select...',
                        list: [
                          { value: this.company_title , title: this.company_title },
                          // { value: 'Other', title: 'Other' },
                        ],
                      },
                    }
                  },
                }
              };
           }

           

           this.source.load(data);
            this.loading = false;
          });

      });
    }
    // this.companyiesServices.getCompanies().then((data)=>{
    //   this.companies = data;
    // })
   
    
     
    
  }

    ngOnInit() {

    }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }

    onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

   editClient(id: number) {
    const activeModal = this.modalService.open(ClientsEdit, { size: 'lg' });
    activeModal.componentInstance.modalHeader = 'Company Edit';
    
    let index = this.data.findIndex(obj => obj._id === id);
    activeModal.componentInstance.modalData = this.data[index];
    activeModal.componentInstance.modalType = 'edit';
     
    console.log(this.data[id]);
  }
  
  addClient() {
   //  console.log(id);
    const activeModal = this.modalService.open(ClientsEdit, { size: 'lg' });
    activeModal.componentInstance.modalHeader = 'Add Client';
    activeModal.componentInstance.modalType = 'add';
    activeModal.componentInstance.modalData = {};
    activeModal.componentInstance.tableData = this.data;
  }
  removeClient(event){

    if(event.data.companyName === "Other" && this.currentUser.user.role !=="admin")
    {
      this.showWaningToast(this.language.message.sorry, this.language.message.removepermission);
      return;
    }

    if (window.confirm(this.language.message.deleteconfirm)) {

      if(this.currentUser.user.role =="company"){
        let index = this.data.findIndex(obj => obj._id === event.data._id);
         this.dataService.removeClientByCompany(this.currentUser.user.companyID, this.data[index]._id).then(client=>{
           for(var i=0; i< this.data.length; i++){
             if(this.data[i]._id === client._id){
               this.data[i]=client;
               this.data[i]['companyName']="Other";
             }
           }
           this.source.load(this.data);
           this.showSuccessToast(this.language.message.success, this.language.message.clientremove);
         })
      } else if(this.currentUser.user.role =="admin"){
        let index = this.data.findIndex(obj => obj._id === event.data._id);
        this.dataService.delete(this.data[index]._id);
          if(index>-1){
            this.data.splice(index, 1);
            this.source.load(this.data);
            this.showSuccessToast(this.language.message.success, this.language.message.clientremove);
          }
        }
          
      } 
  }

  validateEmail(email): Boolean {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  onCreateConfirm(event): void { 

    if(event.newData.firstName===""){
      this.showErrorToast(this.language.message.info, this.language.message.inputfirstname); return;
    } else if(event.newData.lastName===""){
      this.showErrorToast(this.language.message.info, this.language.message.inputlastname); return;
    } else if(event.newData.email===""){
      this.showErrorToast(this.language.message.info, this.language.message.inputemail); return;
    } else if (!this.validateEmail(event.newData.email)){
      this.showErrorToast(this.language.message.info, this.language.message.emailcorrectly);
      return;   
    } 
    if (window.confirm('Are you sure you want to Create?')) {
        event.confirm.resolve();
        this.saveClient(event.newData);
    } else {
      event.confirm.reject();
    }
   

  } 

  onEditConfirm(event): void {

    if(event.newData.firstName===""){
      this.showErrorToast(this.language.message.info, this.language.message.inputfirstname); return;
    } else if(event.newData.lastName===""){
      this.showErrorToast(this.language.message.info, this.language.message.inputlastname); return;
    } else if(event.newData.email===""){
      this.showErrorToast(this.language.message.info, this.language.message.inputemail); return;
    } else if (!this.validateEmail(event.newData.email)){
      this.showErrorToast(this.language.message.info, this.language.message.emailcorrectly);
      return;   
    } 
    

    if(event.newData.companyName === "Other" ){
      if(this.currentUser.user.role!=='admin'){
        window.alert(this.language.message.selectcompanyname);
        return;
      }
      
    }

    if (window.confirm(this.language.message.updateconfirm)) {
        event.confirm.resolve();
        this.saveClient(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  saveClient(newData) {
    let saveData = new Client();
    
    saveData.firstName = newData.firstName;
    saveData.lastName = newData.lastName;
    saveData.email = newData.email;
    saveData.phoneNumber = newData.phoneNumber;
    saveData.street = newData.street;
    saveData.zip = newData.zip;
    saveData.city = newData.city;
    saveData.country = newData.country;
    saveData.status = true;
    saveData.companyID = this.currentUser.user.companyID;

    if(newData._id == undefined){
      this.dataService.create(saveData).then(client => {
         this.data.shift();
         this.data.unshift(client);
         this.source.load(this.data);
         this.showSuccessToast(this.language.message.success, this.language.message.clientcreatemessage);
       }).catch(function(e) {
          alert(this.language.message.sorry+" "+this.language.message.clientcreatefailed); return;
       });
    } else {
      this.dataService.update(saveData, newData._id).then(client => {
        this.showSuccessToast(this.language.message.success, this.language.message.clientupdatemessage);
          //console.log(client);
        // this.tableData.push(client);
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
 