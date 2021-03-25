import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup} from '@angular/forms';
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-form-search',
  template: `
      <form [formGroup]="formSearch" (ngSubmit)="launchSearch()" fxLayout="column" fxLayoutAlign="center center">
          <mat-form-field appearance="outline" color="accent">
              <input matInput placeholder="Clips, actualités ..." formControlName="search" (blur)="launchSearch()">
              <button type="submit" mat-icon-button matSuffix aria-label="Lancer la recherche">
                  <mat-icon class="transition rotate">search</mat-icon>
              </button>
          </mat-form-field>
      </form>
  `,
  styles: [
      "mat-form-field { font-family: 'Yusei Magic', sans-serif; }",
      "mat-icon { color: #689f38; }",
      ".mat-form-field-appearance-outline .mat-form-field-outline { color: white; }",
      "input.mat-input-element { color: white; }",
      "::placeholder { color: #689f38; opacity: 0.8; }",
      ":-ms-input-placeholder { color: #689f38; }",
      "::-ms-input-placeholder { color: #689f38; }"
  ],
  providers: [
      SearchService
  ]
})
export class SearchFormComponent implements OnInit {
  formSearch: FormGroup;

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      search: new FormControl('', [])
    });
  }


  launchSearch(): void {

  }
}
