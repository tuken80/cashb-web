import { Component } from '@angular/core';

import {Comment} from '../models/comment';

import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  template: `
      <mat-tab-group #tabGroupHome mat-stretch-tabs animationDuration="1000ms" color="accent" class="mat-elevation-z4">
          <mat-tab>
              <ng-template mat-tab-label>
                  <mat-icon class="tab-icon" [class.active-tab]="tabGroupHome.selectedIndex === 0">insert_photo</mat-icon>
                  <span>COUVERTURE</span>
              </ng-template>
              <ng-template matTabContent>
                  <div id="couverture" class="mat-elevation-z4" [ngStyle]="couvertureStyle"></div>
              </ng-template>
          </mat-tab>
          <mat-tab>
              <ng-template mat-tab-label>
                  <mat-icon class="tab-icon" [class.active-tab]="tabGroupHome.selectedIndex === 1">face</mat-icon>
                  <span>PRESENTATION</span>
              </ng-template>
              <ng-template matTabContent>
                  <section id="zone-description" fxLayout="column" fxLayoutAlign="space-around">
                      <mat-card>
                          <mat-card-header>
                              <div mat-card-avatar id="avatar-cash-b" [ngStyle]="portraitStyle"></div>
                              <mat-card-title>Cash B</mat-card-title>
                              <mat-card-subtitle>presents by Brolik ENTERTAINMENT</mat-card-subtitle>
                          </mat-card-header>
                          <mat-card-content>
                              <p>Jeune artiste amiénois issu des quartiers sud de la ville, commence a trouver son public. Il a déjà fait ses preuves sur la toile avec plusieurs video-clips cumulant plus de 300 000 vues sur YouTube.</p>
                              <p>Réussissant tout de suite à séduire un large public gràce à son style dilettante et terre a terre, capable de faire danser la foule, il aime exprimer la colère et la tristesse.</p>
                              <p>Cash B est un artiste éclectique faisant sonner un rap cru au vécu bien trempé, et une pop urbaine aux textes ciselés qui osent le pari de la chanson française.</p>
                              <p>Se plaçant comme en enfant du peuple en écrivant un titre qui fédère la montée en première division de l'équipe de football de sa ville natale: Amiens. Cette sortie en fanfare étant saluée par des médias régionaux comme le Courrier Picard mais également nationaux comme France Télévision,ou encore SFR Sport.</p>
                              <p>Cash B est actuellement en studio pour l’enregistrement de son premier album.</p>
                          </mat-card-content>
                      </mat-card>
                      <mat-card>
                          <mat-card-header>
                              <mat-card-title>Avis & commentaires</mat-card-title>
                              <mat-card-subtitle>4 @ @ @ @ @</mat-card-subtitle>
                          </mat-card-header>
                          <mat-card-content>
                              <p *ngFor="let comment of comments;">{{comment.contenu}}</p>
                          </mat-card-content>
                      </mat-card>
                  </section>
              </ng-template>
          </mat-tab>
      </mat-tab-group>    
  `,
  styles: [
      "mat-tab-group { z-index: 5; }",
      "#zone-description { height: 69vh; }",
      ".active-tab { color: #689f38; }",
      ".tab-icon { margin-right: 20px; }"
  ]
})
export class HomeComponent {
    apiStaticImages: string = `${environment.api}/static/images`;
    couvertureStyle = {
        'height': '69vh;',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-image': `'url(${this.apiStaticImages}/logo.png)'`
    };
    portraitStyle = {
        'background-size': 'cover',
        'background-image': `'url(${this.apiStaticImages}/cash_brolik.jpg)'`
    };
    comments: Comment[] = [
        new Comment('popo'),
        new Comment('pipi')
    ];
}