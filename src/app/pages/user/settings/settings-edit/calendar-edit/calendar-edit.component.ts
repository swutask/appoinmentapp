import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CalendarService, Calendar } from '../../../../../services/calendars.service';
import { Config } from "../../../../../services/config";

@Component({
  selector: 'edit-calendar-modal',
  styleUrls: [('./calendar-edit.scss')],
  templateUrl: './calendar-edit.component.html',
})

export class CalendarEdit implements OnInit {

  modalHeader: string;
  modalData: any;
  modalType: string;
  currentUser: any;
  tableData: any[];
  constructor(private activeModal: NgbActiveModal, private calendarService: CalendarService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    console.log(this.modalData);
  }

  saveModal() {
    
    let saveData = new Calendar();
    
    saveData.description = this.modalData.description;
    saveData.status = this.modalData.status;
    saveData.companyID = this.currentUser.user.companyID;

    console.log(saveData);

    if ( this.modalType === 'edit')
    {
      let id = this.modalData._id;
      this.calendarService.update(saveData, id);

    } else {
      
       this.calendarService.create(saveData).then(calendar => {
        
         this.tableData.push(calendar);
       });
    }

    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }
}
