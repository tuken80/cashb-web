import { Component } from '@angular/core';

@Component({
  selector: 'app-actualite-list',
  template: `
    <div>
      <div fxLayout="column" fxLayoutAlign="center center">
        <button mat-stroked-button type="button" color="accent" routerLink="/social/actualite/add">CREER UNE NOUVELLE ACTUALITE</button>
      </div>
      <section fxLayout="column" fxLayoutAlign="space-between">
        <mat-card>
          <mat-card-header>
            <mat-card-title>
              ACTUALITE
            </mat-card-title>
            <mat-card-subtitle>
              13/04/1991
            </mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            LOREM IPSUM
          </mat-card-content>
          <mat-card-actions>
            <button color="accent" mat-stroked-button routerLink="/social/actualite/id">DETAILS</button>
          </mat-card-actions>
        </mat-card>
        <mat-card>
          <mat-card-header>
            <mat-card-title>
              ACTUALITE
            </mat-card-title>
            <mat-card-subtitle>
              13/04/1991
            </mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            LOREM IPSUM
          </mat-card-content>
          <mat-card-actions>
            <button color="accent" mat-stroked-button routerLink="/social/actualite/id">DETAILS</button>
          </mat-card-actions>
        </mat-card>
        <mat-card>
          <mat-card-header>
            <mat-card-title>
              ACTUALITE
            </mat-card-title>
            <mat-card-subtitle>
              13/04/1991
            </mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            LOREM IPSUM
          </mat-card-content>
          <mat-card-actions>
            <button color="accent" mat-stroked-button routerLink="/social/actualite/id">DETAILS</button>
          </mat-card-actions>
        </mat-card>
        <mat-card>
          <mat-card-header>
            <mat-card-title>
              ACTUALITE
            </mat-card-title>
            <mat-card-subtitle>
              13/04/1991
            </mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            LOREM IPSUM
          </mat-card-content>
          <mat-card-actions>
            <button color="accent" mat-stroked-button routerLink="/social/actualite/id">DETAILS</button>
          </mat-card-actions>
        </mat-card>
        <mat-card>
          <mat-card-header>
            <mat-card-title>
              ACTUALITE
            </mat-card-title>
            <mat-card-subtitle>
              13/04/1991
            </mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            LOREM IPSUM
          </mat-card-content>
          <mat-card-actions>
            <button color="accent" mat-stroked-button routerLink="/social/actualite/id">DETAILS</button>
          </mat-card-actions>
        </mat-card>
      </section>
    </div>
  `,
  styles: [
    "button { margin: 15px; }",
    "mat-card { margin: 30px; }"
  ]
})
export class ActualiteListComponent {
}
