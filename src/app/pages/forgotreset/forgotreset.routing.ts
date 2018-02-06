import { Routes, RouterModule }  from '@angular/router';

import { ForgotReset } from './forgotreset.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ForgotReset,
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
