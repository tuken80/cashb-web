import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from '../material.module';
import {FlexLayoutModule} from "@angular/flex-layout";

import {InscriptionComponent} from "./components/inscription.component";
import {InscriptionFormComponent} from "./forms/inscription-form.component";

import {NewsletterRoutingModule} from './newsletter-routing.module';

@NgModule({
  declarations: [
      InscriptionComponent,
      InscriptionFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    NewsletterRoutingModule
  ]
})
export class NewsletterModule { }
