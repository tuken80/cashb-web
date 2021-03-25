import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from '../material.module';
import {FlexLayoutModule} from "@angular/flex-layout";

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {ActualiteListComponent} from "./components/actualite-list.component";
import {ActualiteCreateComponent} from "./components/actualite-create.component";

import {ActualiteFormComponent} from "./forms/actualite-form.component";

import {EvenementielRoutingModule} from './evenementiel-routing.module';

@NgModule({
  declarations: [
      ActualiteListComponent,
      ActualiteCreateComponent,
      ActualiteFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    CKEditorModule,
    EvenementielRoutingModule
  ]
})
export class EvenementielModule { }
