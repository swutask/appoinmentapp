import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ServicesService, Service } from '../../../../../services/services.service';
import { Config } from "../../../../../services/config";

@Component({
  selector: 'edit-service-modal',
  styleUrls: [('./service-edit.scss')],
  templateUrl: './service-edit.component.html',
})

export class ServiceEdit implements OnInit {

  modalHeader: string;
  modalData: any;
  modalType: string;
  currentUser: any;
  tableData: any[];
  constructor(private activeModal: NgbActiveModal, private servicesService: ServicesService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    console.log(this.modalData);
  }

  saveModal() {
    
    let saveData = new Service();
    
    saveData.description = this.modalData.description;
    saveData.price = this.modalData.price;
    saveData.duration = this.modalData.duration;
    saveData.status = this.modalData.status;
    saveData.companyID = this.currentUser.user.companyID;
    
    console.log(saveData);

    if ( this.modalType === 'edit')
    {
      let id = this.modalData._id;
      this.servicesService.update(saveData, id);

    } else {
      
       this.servicesService.create(saveData).then(calendar => {
        
         this.tableData.push(calendar);
       });
    }

    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }
}
