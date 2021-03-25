import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from '../material.module';
import { CdkModule } from '../cdk.module';
import {FlexLayoutModule} from "@angular/flex-layout";

import {DemandeContactComponent} from "./components/demande-contact.component";
import {DemandeContactFormComponent} from "./forms/demande-contact-form.component";

import {ContactRoutingModule} from './contact-routing.module';

@NgModule({
  declarations: [
      DemandeContactComponent,
      DemandeContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CdkModule,
    FlexLayoutModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
