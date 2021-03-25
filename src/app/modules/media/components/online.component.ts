import {Component, OnInit} from '@angular/core';

import { Musique } from '../../../models/musique';
import {MusiqueProvider} from "../../../services/providers/musique.providers";

@Component({
  selector: 'app-media-online',
  template: `
      <section fxLayout="row" fxLayoutAlign="center start">
          <div fxFlex="10" *ngIf="current"></div>
          <div fxFlex="45" fxLayout="column" fxLayoutAlign="center center" *ngIf="current">
            <mat-card class="mat-elevation-z4" [ngSwitch]="formatPlayerValue">
              <mat-card-header>
                <mat-card-title>{{current.titre}}</mat-card-title>
                <mat-card-subtitle>CASH B - {{current.annee}}</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content fxLayout="column" fxLayoutAlign="center center" *ngSwitchCase="'mp3'">
                <app-media-player-audio [id]="current.id"></app-media-player-audio>
              </mat-card-content>
              <mat-card-content fxLayout="column" fxLayoutAlign="center center" *ngSwitchCase="'mp4'">
                <app-media-player-video [id]="current.id"></app-media-player-video>
              </mat-card-content>
              <mat-card-actions fxLayout="column" fxLayoutAlign="center center">
                <mat-button-toggle-group #formatPlayer="matButtonToggleGroup" appearance="legacy" [value]="formatPlayerValue">
                  <mat-button-toggle value="mp3"
                                     (click)="formatPlayerValue = 'mp3'"
                                     aria-label="MP3"
                                     #tooltipMP3="matTooltip"
                                     matTooltip="Player format MP3"
                                     matTooltipPosition="below">
                    <mat-icon>audiotrack</mat-icon>
                  </mat-button-toggle>
                  <mat-button-toggle value="mp4"
                                     (click)="formatPlayerValue = 'mp4'"
                                     aria-label="MP4"
                                     #tooltipMP4="matTooltip"
                                     matTooltip="Player format MP4"
                                     matTooltipPosition="below">
                    <mat-icon>music_video</mat-icon>
                  </mat-button-toggle>
                </mat-button-toggle-group>
              </mat-card-actions>
            </mat-card>
          </div>
          <div fxFlex="10" *ngIf="current"></div>
          <div fxFlex="30">
            <mat-card class="mat-elevation-z4">
              <mat-card-header>
                <mat-card-title>Titres musicaux</mat-card-title>
                <mat-card-subtitle>Par année</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                <mat-list>
                  <mat-list-item *ngFor="let musique of musiques" (click)="current = musique" [class.current-item]="current && current.id === musique.id">
                    <mat-icon mat-list-icon [class.current]="current && current.id === musique.id">video_label</mat-icon>
                    <div mat-line>{{musique.titre}}</div>
                    <div mat-line>{{musique.annee}}</div>
                  </mat-list-item>
                </mat-list>
              </mat-card-content>
            </mat-card>
          </div>
        </section>
  `,
  styles: [
      "mat-card { margin: 30px; }",
      "mat-list-item { cursor: pointer; }",
      "video { width: 80vh; }",
      "audio { margin: 50px; }",
      "mat-button-toggle-group { margin: 15px; }",
      ".current { color:  #689f38; }",
      ".current-item { border: 2px #212121 solid; border-radius: 5px; }"
  ]
})
export class MediaOnlineComponent implements OnInit {
  formatPlayerValue: string = 'mp4';
  musiques: Musique[] = [];
  current: Musique;

  constructor(private musiqueProvider: MusiqueProvider) {}

  ngOnInit(): void {
      this.musiqueProvider.gets()
          .subscribe(ms => this.musiques = ms);
  }
}
