import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import {ChangeEvent} from "@ckeditor/ckeditor5-angular";

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import * as moment from 'moment';

import {Actualite} from "../../../models/actualite";
import {ActualiteProvider} from "../../../services/providers/actualite.providers";

@Component({
  selector: 'app-actualite-form',
  template: `
    <form [formGroup]="formActualite" (ngSubmit)="send()">
      <mat-card>
        <mat-card-header>
          <mat-card-title>CREATION D'UNE ACTUALITE</mat-card-title>
          <mat-card-subtitle>Veuillez remplir tous les champs suivants</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content fxLayout="column" fxLayoutAlign="space-between">
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Titre</mat-label>
              <input matInput placeholder="Choisissez un titre pour votre actualité" name="Titre" type="text" formControlName="titre" required>
              <mat-icon matSuffix>title</mat-icon>
              <mat-error *ngIf="(formActualite.get('titre').invalid && (formActualite.get('titre').dirty || formActualite.get('titre').touched)) && formActualite.get('titre').errors.required">Le titre est obligatoire.</mat-error>
            </mat-form-field>
          </div>
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Date</mat-label>
              <input matInput [matDatepicker]="dp" placeholder="Indiquez la date à laquelle l'actualité c'est produite" name="Date" formControlName="date" required (focus)="dp.open()">
              <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
              <mat-datepicker touchUi #dp></mat-datepicker>             
              <mat-error *ngIf="(formActualite.get('titre').invalid && (formActualite.get('titre').dirty || formActualite.get('titre').touched)) && formActualite.get('titre').errors.required">Le titre est obligatoire.</mat-error>
            </mat-form-field>
          </div>
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Description rapide</mat-label>   
              <mat-icon matSuffix>description</mat-icon>
              <textarea matInput placeholder="Décrivez rapidement votre actualité." name="Description" rows="5" formControlName="description" required></textarea>
              <mat-error *ngIf="(formActualite.get('description').invalid && (formActualite.get('description').dirty || formActualite.get('description').touched)) && formActualite.get('description').errors.required">La description est obligatoire.</mat-error>
            </mat-form-field>
          </div>
          <div>
            <ckeditor tagName="textarea" [editor]="Editor" data="<p>Ecrivez et décrivez votre actualité. Vous pouvez insérer des images, du text, des liens, etc ...</p>"  (ready)="onReady($event)" (change)="onChange($event)"></ckeditor>
          </div>
        </mat-card-content>
        <mat-card-actions fxLayout="row" fxLayoutAlign="space-between">
          <button mat-stroked-button type="reset">RESET</button>
          <button mat-stroked-button type="submit" color="accent">ENVOYER</button>
        </mat-card-actions>
      </mat-card>
    </form>
  `,
  styles: [
      "mat-card { margin: 40px; }",
      "mat-form-field { width: 100%; }",
      "mat-card-actions { padding: 30px; }"
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})

export class ActualiteFormComponent implements OnInit {
  public Editor = DecoupledEditor;
  formActualite: FormGroup;
  msbHoriPos: MatSnackBarHorizontalPosition = "end";
  msbVertPos: MatSnackBarVerticalPosition = "bottom";
  editorData: string = '';

  constructor(private actualiteProvider: ActualiteProvider, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.formActualite = new FormGroup({
      titre: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required,
      ])
    });
  }

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
  }

  public onChange( { editor }: ChangeEvent ) {
    this.editorData = editor.getData();
  }

  send() {
    if (this.formActualite.valid) {
      const data = this.formActualite.value;
      const a = new Actualite(data.titre, data.description, this.editorData, new Date());
    }
  }
}
