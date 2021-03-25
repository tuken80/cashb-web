import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {FlexLayoutModule} from "@angular/flex-layout";

import {MaterialModule} from "./modules/material.module";
import {CdkModule} from "./modules/cdk.module";
import {MAT_DATE_LOCALE} from "@angular/material/core";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HomeComponent} from "./components/home.component";
import {LicenseComponent} from "./components/license.component";
import {NotFoundComponent} from "./components/not-found.component";
import {ReseauxSociauxComponent} from "./components/reseaux-sociaux.component";
import {NavComponent} from "./components/nav.component";

import {SearchFormComponent} from "./forms/search-form.component";

import {SearchService} from "./services/search.service";

import {ActualiteProvider} from "./services/providers/actualite.providers";
import {ContactProvider} from "./services/providers/contact.providers";
import {MailProvider} from "./services/providers/mail.providers";

@NgModule({
  declarations: [
    HomeComponent,
    LicenseComponent,
    NotFoundComponent,
    ReseauxSociauxComponent,
    NavComponent,
    SearchFormComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    CdkModule,
    AppRoutingModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    SearchService,
    ActualiteProvider,
    ContactProvider,
    MailProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
