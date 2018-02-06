import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CategoriesService, Category } from '../../../../services/categories.service';

@Component({
  selector: 'edit-categories-modal',
  styleUrls: [('./categories-edit.scss')],
  templateUrl: './categories-edit.component.html',
})

export class CategoriesEdit implements OnInit {

  modalHeader: string;
  modalData: any;
  modalType: any;
  tableData: any[];

  constructor(private activeModal: NgbActiveModal, private dataService: CategoriesService) {
  }

  ngOnInit() {

  }

  saveModal() {

    let saveData = new Category();
    
    saveData.description = this.modalData.description;
    saveData.status = this.modalData.status;
    

    if(this.modalType == 'edit')
    {
      let id = this.modalData._id;
      this.dataService.update(saveData, id);

    }else{
      this.dataService.create(saveData).then(category => {

        console.log(category);
        this.tableData.push(category);
      });
    }

    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }
}
