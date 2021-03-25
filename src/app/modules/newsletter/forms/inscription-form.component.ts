import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import {Mail} from "../../../models/mail";
import {MailProvider} from "../../../services/providers/mail.providers";

@Component({
  selector: 'app-newsletter-form',
  template: `
    <form [formGroup]="formNewsletter" (ngSubmit)="send()">
      <mat-card>
        <mat-card-header>
          <mat-card-title>INSCRIPTION A LA NEWSLETTER</mat-card-title>
          <mat-card-subtitle>Veuillez donner votre adresse mail.</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content fxLayout="column" fxLayoutAlign="space-between">
          <div>
            <mat-form-field appearance="outline">
              <mat-label>Adresse mail</mat-label>
              <input matInput placeholder="john.doe@icloud.com" name="Email" type="email" formControlName="mail" required>
              <mat-icon matSuffix>mail</mat-icon>
              <mat-error *ngIf="(formNewsletter.get('mail').invalid && (formNewsletter.get('mail').dirty || formNewsletter.get('mail').touched)) && formNewsletter.get('mail').errors.required">L'adresse mail est obligatoire.</mat-error>
              <mat-error *ngIf="(formNewsletter.get('mail').invalid && (formNewsletter.get('mail').dirty || formNewsletter.get('mail').touched)) && formNewsletter.get('mail').errors.email">L'adresse mail doit être au bon format.</mat-error>
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
    "mat-card { margin: 40px; }",
    "mat-form-field { width: 100%; }",
    "mat-card-actions { padding: 30px; }"
  ]
})
export class InscriptionFormComponent implements OnInit {
  formNewsletter: FormGroup;
  msbHoriPos: MatSnackBarHorizontalPosition = "end";
  msbVertPos: MatSnackBarVerticalPosition = "bottom";

  constructor(private mailProvider: MailProvider, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.formNewsletter = new FormGroup({
      mail: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  send() {
    if (this.formNewsletter.valid) {
      const m = new Mail(this.formNewsletter.value.mail, true);

      this.mailProvider.add(m).subscribe(() => this._snackBar.open('Inscription à la newsletter enregistré.', 'OK', {
        duration: 2500,
        horizontalPosition: this.msbHoriPos,
        verticalPosition: this.msbVertPos,
      }));
    }
  }
}
