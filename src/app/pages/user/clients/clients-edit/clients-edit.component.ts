import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientsService, Client } from '../../../../services/clients.service';


@Component({
  selector: 'edit-clients-modal',
  styleUrls: [('./clients-edit.scss')],
  templateUrl: './clients-edit.component.html',
})

export class ClientsEdit implements OnInit {

  modalHeader: string;
  modalData: any;
  modalType: string;
  tableData: any[];

  currentUser:any;

  constructor(private activeModal: NgbActiveModal, public clientService:ClientsService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser.user);
  }

  ngOnInit() {
    
  }

  saveModal() {

    let saveData = new Client();
    
    saveData.firstName = this.modalData.firstName;
    saveData.lastName = this.modalData.lastName;
    saveData.email = this.modalData.email;
    saveData.phoneNumber = this.modalData.phoneNumber;
    saveData.street = this.modalData.street;
    saveData.zip = this.modalData.zip;
    saveData.city = this.modalData.city;
    saveData.country = this.modalData.country;
    saveData.fax = this.modalData.fax;
    saveData.status = this.modalData.status;
    saveData.companyID = this.currentUser.user.companyID;

    console.log(saveData);

    if ( this.modalType === 'edit') {
      let id = this.modalData._id;
      // console.log("company id"+id);
      //this.dataService.update(saveData, id);

    } else {
      
       this.clientService.create(saveData).then(client => {
        
         this.tableData.push(client);
       });
    }

    this.activeModal.close();

  }

  closeModal() {
    this.activeModal.close();
  }
  
 
}
