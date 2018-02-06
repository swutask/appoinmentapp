import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

import { CompaniesService } from '../../../services/companies.service';
import { ClientsService } from '../../../services/clients.service';


@Component({
  template: `
    {{renderValue}}
  `,
})
export class CustomCompanyComponent implements ViewCell, OnInit {

  renderValue: string;
  data;
  source;
  currentUser;
  @Input() value: string | number;
  @Input() rowData: any;

  constructor(private companiesService: CompaniesService, private clientsService: ClientsService){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.companiesService.getCompaniesByID(this.currentUser.user.companyID).then((data) => {
          this.renderValue = data.name;
    });
  }
}