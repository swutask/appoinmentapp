import { Component, OnInit, AfterViewInit } from '@angular/core';



import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientsService, Client } from '../../../services/clients.service';
import { UsersService, User } from '../../../services/users.service';

import { CompaniesService } from '../../../services/companies.service';
import { CompleterData } from 'ng2-completer';
import { NotificationsService } from 'angular2-notifications';
import { LanguageService } from '../../../services/language.service';
@Component({
  selector: 'admin-tables',
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss'],
})

export class AdminTables {

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'email';
    sortOrder = 'asc';
    currentUser: any;
    public loading: boolean; 
    company_title:string;
    source: LocalDataSource;
    
    settings;
    companies;any;

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

    constructor(private dataService: UsersService, private modalService: NgbModal, private companyiesServices: CompaniesService,  private _service: NotificationsService, private _langService: LanguageService ) {
    this.loading = true;
      this.source = new LocalDataSource();

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      this.companyiesServices.getCompanies().then((data)=>{
        this.companies = data;
      })

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

      this.dataService.getAdminUsers().then((data) => {
            this.data = data;
            console.log(this.data);
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
                username: {
                  title: 'username',
                  type: 'string',
                },
                email: {
                  title: 'E-mail',
                  type: 'string'
                },
                name: {
                  title: 'name',
                  type:'string'
                }, 
                country: {
                  title: 'Country',
                  type: 'number'
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
                username: {
                  title: 'Benutzer',
                  type: 'string',
                },
                email: {
                  title: 'E-mail',
                  type: 'string'
                },
                name: {
                  title: 'Name',
                  type:'string'
                }, 
                country: {
                  title: 'Land',
                  type: 'number'
                },
              }
            };
           }
           

           this.source.load(data);
           this.loading = false;
          });
    
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
    if (window.confirm(this.language.message.deleteconfirm)) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

   editClient(id: number) {
 
  }
  
  addClient() {
   //  console.log(id);

  }
  removeAdmin(event){
    if (window.confirm(this.language.message.deleteconfirm)) {
        let index = this.data.findIndex(obj => obj._id === event.data._id);
        this.dataService.delete(this.data[index]._id);
        if(index>-1){
          this.data.splice(index, 1);
          this.source.load(this.data);
          this.showSuccessToast(this.language.message.success, this.language.message.adminremoved);
        }
    }
  }

  validateEmail(email): Boolean {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  onCreateConfirm(event): void { 

    if(event.newData.username===""){
      this.showErrorToast(this.language.message.info, this.language.message.inputusername); return;
    } else if(event.newData.email===""){
      this.showErrorToast(this.language.message.info, this.language.message.inputemail); return;
    } else if (!this.validateEmail(event.newData.email)){
      this.showErrorToast(this.language.message.info, this.language.message.emailcorrectly); return;
    } 

    if (window.confirm(this.language.message.createconfirm)) {
        // event.confirm.resolve();
        this.saveAdmin(event.newData, event);
    } else {
      event.confirm.reject();
    }
   

  }

  onEditConfirm(event): void {
    if(event.newData.username===""){
      alert(this.language.message.inputusername); return;
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
        this.saveAdmin(event.newData, event);
    } else {
      event.confirm.reject();
    }
  }

  saveAdmin(newData, event) {
    let saveData = new User();
    
    saveData.username = newData.username;
    saveData.email = newData.email;
    saveData.country = newData.country;
    saveData.active = true;
    saveData.name = newData.name;

    if(newData._id == undefined){
      this.dataService.create(saveData).then(user => {
        console.log(user)
        event.confirm.resolve();
         this.data.shift();
         this.data.unshift(user);
         this.source.load(this.data);
         this.showSuccessToast(this.language.message.success, this.language.message.admincreated);
       }, error => {

        event.confirm.reject();
        error = JSON.parse(error._body);

        this.showErrorToast(this.language.message.info, error.message);

       });
    } else {
      this.dataService.update(saveData, newData._id).then(user => {
        this.showSuccessToast(this.language.message.success, this.language.message.adminupdated);
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
