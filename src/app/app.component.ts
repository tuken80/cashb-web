import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Musique} from "./models/musique";

@Component({
  selector: 'app-root',
  template: `
    <header>
      <mat-toolbar color="primary" class="mat-elevation-z4">
          <button mat-icon-button aria-label="Menu" (click)="navSidenav.toggle()" [ngSwitch]="navSidenav.opened">
              <mat-icon class="transition rotate" *ngSwitchCase="true">menu_open</mat-icon>
              <mat-icon class="transition rotate" *ngSwitchCase="false">menu</mat-icon>
          </button>
          <span class="span-title">
            <h2 class="mat-display-1">Brolik ENTERTAINMENT<br><i>présente</i></h2>
          </span>
          <span class="toolbar-spacer"></span>
          <span class="span-title">
            <h1 id="title" class="mat-display-3">Cash B</h1>
          </span>
          <span class="toolbar-spacer"></span>
          <app-form-search></app-form-search>
      </mat-toolbar>
    </header>
    <mat-sidenav-container>
      <mat-sidenav #navSidenav mode="side" opened fixedInViewport="true" fixedTopGap="100" fixedBottomGap="0" fxLayout="column" fxLayoutAlign="center center">
        <app-nav></app-nav>
        <footer fxLayout="row" fxLayoutAlign="space-around center" class="mat-elevation-z4">
          <app-reseaux-sociaux></app-reseaux-sociaux>
          <span>© 2021</span>
        </footer>
      </mat-sidenav>

      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
      "header { position: fixed; top: 0; left: 0; right: 0; z-index: 3; }",
      "mat-toolbar { height: 100px; }",
      "mat-toolbar button { margin-right: 15px; }",
      "h1, h2 { color: #689f38; }",
      "app-form-search { margin-top: 25px; }",
      "mat-sidenav-container { z-index: 2; position: absolute; top: 100px; left: 0; right: 0; }",
      "mat-sidenav { width: 300px; }",
      "mat-sidenav-content { padding: 10px 20px 30px 20px; }",
      "footer { background-color: #212121; padding: 10px; color: #689f38; position: absolute; bottom: 0; width: 299px; }",
      "#title { font-family: 'Acme', sans-serif; z-index: 4; }",
      ".span-title { margin-top: 65px; }"
  ]
})
export class AppComponent {
  musique: Musique;
}
