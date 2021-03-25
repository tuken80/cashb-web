import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {take} from "rxjs/operators";

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import {CdkTextareaAutosize} from "@angular/cdk/text-field";

import {ContactProvider} from "../../../services/providers/contact.providers";
import {Contact} from "../../../models/contact";
import {Mail} from "../../../models/mail";
import {Telephone} from "../../../models/telephone";

@Component({
  selector: 'app-demande-contact-form',
  template: `
    <form id="form-contact" [formGroup]="formContact" (ngSubmit)="send()">
      <mat-card class="mat-elevation-z4">
        <mat-card-header>
          <mat-card-title>FORMULAIRE DE CONTACT</mat-card-title>
          <mat-card-subtitle>Décrire un projet ou préparer une collaboration, c'est possible en nous contactant.</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content fxLayout="column" fxLayoutAlign="space-between">
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Adresse mail</mat-label>
              <input matInput placeholder="john.doe@domaine.com" name="Email" type="email" formControlName="mail" required>
              <mat-icon matSuffix>mail</mat-icon>
              <mat-error *ngIf="(formContact.get('mail').invalid && (formContact.get('mail').dirty || formContact.get('mail').touched)) && formContact.get('mail').errors.required">Vous devez écrire une adresse mail.</mat-error>
              <mat-error *ngIf="(formContact.get('mail').invalid && (formContact.get('mail').dirty || formContact.get('mail').touched)) && formContact.get('mail').errors.email">Vous devez écrire une adresse mail correct.</mat-error>
            </mat-form-field>
          </div>
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Numéro de téléphone</mat-label>
              <input matInput placeholder="+33699999999" name="Telephone" type="tel" formControlName="telephone" required>
              <mat-icon matSuffix>mail</mat-icon>
              <mat-error *ngIf="(formContact.get('telephone').invalid && (formContact.get('telephone').dirty || formContact.get('telephone').touched)) && formContact.get('telephone').errors.required">Vous devez écrire un numéro de téléphone.</mat-error>
              <mat-error *ngIf="(formContact.get('telephone').invalid && (formContact.get('telephone').dirty || formContact.get('telephone').touched)) && formContact.get('telephone').errors.tel">Vous devez écrire un numéro de téléphone correct.</mat-error>
            </mat-form-field>
          </div>
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Sujet</mat-label>
              <mat-icon matSuffix>subject</mat-icon>
              <input matInput placeholder="Définissez un sujet." name="Sujet" type="text" formControlName="sujet" required maxlength="300">
              <mat-error *ngIf="(formContact.get('sujet').invalid && (formContact.get('sujet').dirty || formContact.get('sujet').touched)) && formContact.get('sujet').errors.required">Vous devez écrire le sujet de votre approche.</mat-error>
            </mat-form-field>
          </div>
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Détails</mat-label>   
              <mat-icon matSuffix>details</mat-icon>
              <textarea matInput placeholder="Décrivez votre projet." name="Details" type="text" formControlName="details" required rows="5" maxlength="2000" form="form-contact"></textarea>
              <mat-error *ngIf="(formContact.get('details').invalid && (formContact.get('details').dirty || formContact.get('details').touched)) && formContact.get('details').errors.required">Vous devez écrire les détails de votre approche.</mat-error>
            </mat-form-field>
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
      "mat-card { margin: 30px; }",
      "mat-form-field { margin-right: 2.5%; margin-left: 2.5%; width: 95%; }",
      "mat-card-actions { padding: 30px; }"
  ]
})

export class DemandeContactFormComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  formContact: FormGroup;
  msbHoriPos: MatSnackBarHorizontalPosition = "end";
  msbVertPos: MatSnackBarVerticalPosition = "bottom";

  constructor(private contactProvider: ContactProvider, private _snackBar: MatSnackBar, private _ngZone: NgZone) { }

  ngOnInit() {
    this.formContact = new FormGroup({
      sujet: new FormControl('', [
        Validators.required
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern("+[0-9]{11}")
      ]),
      details: new FormControl('', [
        Validators.required
      ])
    });
  }

  send() {
    if (this.formContact.valid) {
      const data = this.formContact.value;
      const m = new Mail(data.mail, false);
      const t = new Telephone(data.telephone);
      const c = new Contact(data.sujet, data.details, m, t);

      this.contactProvider.add(c).subscribe(() => this._snackBar.open('Demande de contact envoyée avec succès.', 'OK', {
        duration: 2500,
        horizontalPosition: this.msbHoriPos,
        verticalPosition: this.msbVertPos,
      }));
    }
  }
}
