import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'edit-admin-modal',
  styleUrls: [('./admin-edit.scss')],
  templateUrl: './admin-edit.component.html',
})

export class AdminEdit implements OnInit {

  modalHeader: string;
  modalData: any;
  

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    console.log(this.modalData);
  }

  saveModal() {
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }
}
  