import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav fxLayout="column" fxLayoutAlign="space-between">
      <mat-list>
        <mat-list-item routerLink="/home" routerLinkActive="active">
          <mat-icon mat-list-icon>home</mat-icon>
          <div mat-line>Accueil</div>
          <div mat-line>Présentation</div>
        </mat-list-item>
        <mat-list-item routerLink="/evenementiel/actualites" routerLinkActive="active">
          <mat-icon mat-list-icon>list</mat-icon>
          <div mat-line>Actualités & Evenements</div>
          <div mat-line>Les dernières nouvelles</div>
        </mat-list-item>
        <mat-list-item routerLink="/media/online" routerLinkActive="active">
          <mat-icon mat-list-icon>featured_video</mat-icon>
          <div mat-line>Lecteurs en ligne</div>
          <div mat-line>AUDIOS & VIDEOS</div>
        </mat-list-item>
        <mat-list-item routerLink="/media/downloads" routerLinkActive="active">
          <mat-icon mat-list-icon>cloud_download</mat-icon>
          <div mat-line>Téléchargements</div>
          <div mat-line>MP3 & MP4</div>
        </mat-list-item>
        <mat-list-item routerLink="/contact/demande" routerLinkActive="active">
          <mat-icon mat-list-icon>mail</mat-icon>
          <div mat-line>Page de contact</div>
          <div mat-line>Formulaire à remplir</div>
        </mat-list-item>
        <mat-list-item routerLink="/session/profil" routerLinkActive="active">
          <mat-icon id="icon-profil" mat-list-icon>account_circle</mat-icon>
          <div mat-line>Accéder à votre profil</div>
          <div mat-line>Informations personnelles</div>
        </mat-list-item>
      </mat-list>
    </nav>
  `,
  styles: [
    "nav { padding: 0 10px 1px 1px;}",
    "mat-list-item { cursor: pointer; font-family: 'Yusei Magic', sans-serif; }",
    "#icon-profil { font-size: 50px; margin-left: -15px; margin-top: -25px; margin-right: 15px; }",
    ".active { border: 2px #212121 solid; border-radius: 5px; }",
    ".active mat-icon { color: #689f38; }"
  ]
})
export class NavComponent {}
