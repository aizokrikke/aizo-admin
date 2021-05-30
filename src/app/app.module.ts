import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PersonalMenuComponent } from './personal-menu/personal-menu.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { UseradminComponent } from './useradmin/useradmin.component';
import { ProjectadminComponent } from './projectadmin/projectadmin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminGuard } from './guards/admin';
import { AdminhomeComponent } from './adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PersonalMenuComponent,
    AdminComponent,
    LoginComponent,
    UseradminComponent,
    ProjectadminComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
