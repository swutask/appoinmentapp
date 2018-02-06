import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'angular-calendar';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppTranslationModule } from '../app.translation.module';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { DataFilterPipe } from './user/data-filter.pipe';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { Ng2CompleterModule } from 'ng2-completer';

import { Pages } from './pages.component';
import { ClientsTables, MultiSelectDropdownComponent } from './user/clients/clientsTables.component';
import { SettingsTables } from './user/settings/settingsTables.component';
import { AppointmentComponent } from './user/appointments/appointments.component';
import { SelectClientComponent } from './user/appointments/select-client/select-client.component';
import { CustomCompanyComponent } from './user/clients/custom_company.component';
import { Companies } from './admin/companies/companies.component';
import { CompaniesEdit } from './admin/companies/companies-edit/companies-edit.component';
import { AdminTables } from './admin/admin/admin.component';
import { AdminEdit } from './admin/admin/admin-edit/admin-edit.component';
import { Categories } from './admin/categories/categories.component';
import { CategoriesEdit } from './admin/categories/categories-edit/categories-edit.component';
// import { Clients } from './admin/clients/clients.component';
import { ClientsEdit } from './user/clients/clients-edit/clients-edit.component';
import { CalendarEdit } from './user/settings/settings-edit/calendar-edit/calendar-edit.component';
import { ServiceEdit } from './user/settings/settings-edit/service-edit/service-edit.component';
import { UsersService } from '../services/users.service';
import { ClientsService } from '../services/clients.service';
import { CompaniesService } from '../services/companies.service';
import { CategoriesService } from '../services/categories.service';
import { CalendarService } from '../services/calendars.service';
import { ServicesService } from '../services/services.service';
import { AppointmentService } from '../services/appointment.service';
import { BasicTablesService } from './user/appointments/select-client/basicTables.service';
import { SmartTablesService } from './user/appointments/select-client/smartTables.service';
import { ChangePassword } from './user/changepassword/changePassword.component';


import { OpeningHoursService } from '../services/openinghours.service';


import { CalendarHeaderComponent } from './user/appointments/calendar-header.component';

import { DateTimePickerComponent } from './user/appointments/date-time-picker.component';
import '../../../node_modules/angular-calendar/dist/css/angular-calendar.css';
import { BusyModule } from 'angular2-busy';
import { MaterialModule } from '@angular/material';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Login } from './login/login.component';
import {AuthGuard} from '../services/auth-guard.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LanguageService } from '../services/language.service';



@NgModule({
  imports: [CommonModule, 
            AppTranslationModule, 
            NgaModule, routing, 
            FormsModule, 
            Ng2SmartTableModule,
            DataTableModule,
            HttpModule,
            NgbModalModule,
            NgbDropdownModule,
            NgbDatepickerModule.forRoot(),
            NgbTimepickerModule.forRoot(),
            FormsModule,
            ReactiveFormsModule,
            Ng2CompleterModule,
            BusyModule,
            CalendarModule.forRoot(),
            SimpleNotificationsModule.forRoot(),
            MaterialModule,
            ],
  declarations: [Pages, 
                ClientsTables,
                MultiSelectDropdownComponent,
                ClientsEdit,
                SettingsTables,
                ChangePassword,
                CalendarEdit,
                ServiceEdit,
                Companies,
                CompaniesEdit,
                AdminTables,
                AdminEdit,
                AdminEdit,
                Categories,
                CategoriesEdit,
                DataFilterPipe,
                AppointmentComponent,
                SelectClientComponent,
                CalendarHeaderComponent,
                DateTimePickerComponent,
                CustomCompanyComponent,
                Login
                ],
                
  entryComponents:[ MultiSelectDropdownComponent, CompaniesEdit, AdminEdit, CategoriesEdit, ClientsEdit, CalendarEdit, ServiceEdit, SelectClientComponent, CustomCompanyComponent],                
  providers: [ UsersService, ClientsService, CompaniesService, CategoriesService, AuthGuard, LanguageService,
             CalendarService, ServicesService, OpeningHoursService, AppointmentService, SlimLoadingBarService, BasicTablesService, SmartTablesService  ]  
  
})

export class PagesModule {
}
