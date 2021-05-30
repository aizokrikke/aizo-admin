import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './guards/admin';


export let ROUTES: Routes = [
  {
    path: 'admin/:action',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing = RouterModule.forChild(ROUTES);
