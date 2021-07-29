import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddContactPageComponent } from './pages/add-contact-page/add-contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactPageComponent,
    ContactInfoComponent,
    MainNavbarComponent,
    MainLayoutComponent,
    AppHeaderComponent,
    LoginPageComponent,
    AddContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
