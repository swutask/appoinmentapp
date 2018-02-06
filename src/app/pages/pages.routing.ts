import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';


import { ClientsTables} from './user/clients/clientsTables.component';
import { SettingsTables} from './user/settings/settingsTables.component';
import { ChangePassword} from './user/changepassword/changePassword.component';
import { Companies} from './admin/companies/companies.component';
import { AdminTables } from './admin/admin/admin.component';
import { Categories} from './admin/categories/categories.component';
import { AppointmentComponent } from './user/appointments/appointments.component';
import {Login} from './login/login.component';
import { AuthGuard } from '../services/auth-guard.service';


// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    // path: 'login',
    // loadChildren: 'app/pages/login/login.module#LoginModule'
        path: 'login',
        component: Login,
        
  },
  {
    path: 'forgot',
    loadChildren: 'app/pages/forgot/forgot.module#ForgotModule'
  },
  {
    path: '!/forgot-password/:verificationCode/reset',
    loadChildren: 'app/pages/forgotreset/forgotreset.module#ForgotresetModule'
  },
  {
    path: 'clients',
    
    redirectTo: 'pages/clients', 
    pathMatch: 'full'
  },
  {
    path: 'changepassword',
    redirectTo: 'pages/changepassword', 
    pathMatch: 'full'
  },
  {
    path: 'settings',
    redirectTo: 'pages/settings', 
    pathMatch: 'full'
  },
  {
    path: 'appointments',
    redirectTo: 'pages/appointments', 
    pathMatch: 'full'
  },
  {
    path: 'companies',
    redirectTo: 'pages/companies', 
    pathMatch: 'full'
  },
  {
    path: 'admin',
    redirectTo: 'pages/admin', 
    pathMatch: 'full'
  },
  {
    path: 'categories',
    redirectTo: 'pages/categories', 
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: Pages,
    children: [

      { path: 'clients', component: ClientsTables, canActivate: [AuthGuard]},
      { path: 'appointments', component: AppointmentComponent, canActivate: [AuthGuard], data:{roles:['company']}},
      { path: 'settings', component: SettingsTables, canActivate: [AuthGuard], data:{roles:['company']}},
      { path: 'changepassword', component: ChangePassword, canActivate: [AuthGuard]},
      { path: 'companies', component: Companies, canActivate: [AuthGuard], data:{roles:['admin']}},
      { path: 'categories', component: Categories, canActivate: [AuthGuard], data:{roles:['admin']}},
      { path: 'admin', component: AdminTables, canActivate: [AuthGuard], data:{roles:['admin']}}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
