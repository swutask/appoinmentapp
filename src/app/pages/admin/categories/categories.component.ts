
import { Component, OnInit, AfterViewInit } from '@angular/core';



import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientsService, Client } from '../../../services/clients.service';
import { UsersService, User } from '../../../services/users.service';

import { CompaniesService, Company } from '../../../services/companies.service';
import { CategoriesService, Category} from '../../../services/categories.service';
import { NotificationsService } from 'angular2-notifications';
import { LanguageService } from '../../../services/language.service';
@Component({
  selector: 'categories',
  styleUrls: [('./categories.scss')],
  templateUrl: './categories.html',
})

export class Categories {

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'email';
    sortOrder = 'asc';
    currentUser: any;
    public loading: boolean; 
    source: LocalDataSource;
    
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

    constructor(private dataService: UsersService, private modalService: NgbModal, private categoriesServices: CategoriesService,  private _service: NotificationsService, private _langService: LanguageService ) {
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

    this.categoriesServices.getCategories().then(data => {
      this.data = data;
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
                description: {
                  title: 'Category Name',
                  type: 'string',
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
                description: {
                  title: 'Kategorie',
                  type: 'string',
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
           this.source.load(data);
           this.loading = false;
    }); 

  }

    ngOnInit() {

    }

  removeCategory(event){
    if (window.confirm(this.language.message.deleteconfirm)) {
        let index = this.data.findIndex(obj => obj._id === event.data._id);
        this.categoriesServices.delete(this.data[index]._id);
        if(index>-1){
          this.data.splice(index, 1);
          this.source.load(this.data);
          this.showSuccessToast(this.language.message.success, this.language.message.categoryremoved);
        }
    }
  }

  onCreateConfirm(event): void { 
    if (window.confirm(this.language.message.createconfirm)) {
        event.confirm.resolve();
        this.saveCategory(event.newData);
    } else {
      event.confirm.reject();
    }
   

  } 

  onEditConfirm(event): void {

    if (window.confirm(this.language.message.updateconfirm)) {
        event.confirm.resolve();
        this.saveCategory(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  saveCategory(newData) {
    let saveData = new Category();
    
    saveData.description = newData.description;
    saveData.status = newData.status;

    if(newData._id == undefined){
      this.categoriesServices.create(saveData).then(categories => {
        console.log(categories)
         this.data.shift();
         this.data.unshift(categories);
         this.source.load(this.data);
         this.showSuccessToast(this.language.message.success, this.language.message.categorycreated);
       });
    } else {
      this.categoriesServices.update(saveData, newData._id).then(categories => {
          this.showSuccessToast(this.language.message.success, this.language.message.categoryupdated);
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
