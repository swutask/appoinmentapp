import { Component } from '@angular/core';

import { SmartTablesService } from './smartTables.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ClientsService, Client } from '../../../../services/clients.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from '../../../../services/language.service';
@Component({
  selector: 'smart-tables',
  templateUrl: './select-client.component.html',
  styleUrls: ['./select-client.component.scss'],
})
export class SelectClientComponent {

  query: string = '';

  

  source: LocalDataSource = new LocalDataSource();
  settings;
  currentUser: any;
  clients: any;
  selectedClient: any[] = [];

  constructor(private activeModal: NgbActiveModal, protected service: SmartTablesService, private clientService: ClientsService ) {
    // this.service.getData().then((data) => {
    //   this.source.load(data);
    // });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.clientService.getAllClients().then((data) => {
      this.clients = data;
      this.source.load(data);

      this.source.setFilter([{ field: 'companyID', search: [this.currentUser.user.companyID] }]);
      // console.log("------", this.clients);
    });

    if(localStorage.getItem('lang')==='en'){
      this.settings = {
        actions: true,
        columns: {
          firstName: {
            title: 'First Name',
            type: 'string',
            filter: false
          },
          lastName: {
            title: 'Last Name',
            type: 'string',
            filter: false
          },
          email: {
            title: 'E-mail',
            type: 'string',
            filter: false
          },
          country: {
            title: 'Country',
            type: 'string',
            filter: false
          }
        }
      };
    } else {
      this.settings = {
        actions: false,
        columns: {
          firstName: {
            title: 'Vorname',
            type: 'string'
          },
          lastName: {
            title: 'Nachname',
            type: 'string'
          },
          email: {
            title: 'E-mail',
            type: 'string'
          },
          country: {
            title: 'Land',
            type: 'string'
          }
        }
      };
    }

  }

  onSearch(query: string = '') {
    if(query) {
      this.source.reset(true);
      this.source.setFilter([
        // fields we want to inclue in the search
        {
          field: 'firstName',
          search: query,
        },
        {
          field: 'lastName',
          search: query,
        },
        {
          field: 'email',
          search: query,
        },
        {
          field: 'country',
          search: query,
        }
      ], false);
    } else {
      this.source.reset(true);
      
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.source.setFilter([{ field: 'companyID', search: [this.currentUser.user.companyID] }]);
    }
    
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  onFilter(event) {
    console.log(event);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  selectClient(event) {
    console.log(event.data);
    this.selectedClient = [];
    this.selectedClient.push(event.data);
    
  }

  Select() {
    if(this.selectedClient == undefined) return;
    this.activeModal.close(this.selectedClient);
  }

  closeModal() {
    this.activeModal.close();
  }

}
