import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompaniesService, Company } from '../../../../services/companies.service';
import { CategoriesService, Category } from '../../../../services/categories.service';
import { Router } from '@angular/router';
@Component({
  selector: 'edit-companies-modal',
  styleUrls: [('./companies-edit.scss')],
  templateUrl: './companies-edit.component.html',
})

export class CompaniesEdit implements OnInit {

  modalHeader: string;
  modalData: any;
  modalType: string;
  tableData: any[];
  categories :any;
  constructor(private activeModal: NgbActiveModal, private dataService: CompaniesService, private router: Router, private categoriesService:CategoriesService) {
    
  }

  ngOnInit() {
    this.modalData.status = true;
    this.categoriesService.getCategories().then((data) => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  saveModal() {
    let saveData = new Company();
    
    saveData.name = this.modalData.name;
    saveData.email = this.modalData.email;
    saveData.phoneNumber = this.modalData.phoneNumber;
    saveData.street = this.modalData.street;
    saveData.zip = this.modalData.zip;
    saveData.city = this.modalData.city;
    saveData.country = this.modalData.country;
    saveData.fax = this.modalData.fax;
    saveData.status = this.modalData.status;
    saveData.categories = this.modalData.categories;
    saveData.latitude = this.modalData.latitude;
    saveData.longitude = this.modalData.longitude;

    if(this.modalType == 'edit')
    {
      let id = this.modalData._id;
      // console.log("company id"+id);
      this.dataService.update(saveData, id);

    }else{
      this.dataService.create(saveData).then(company => {
        this.tableData.push(company);
      });
    }

    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
    
  }
}
