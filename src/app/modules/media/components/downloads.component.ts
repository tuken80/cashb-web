import {Component, OnInit} from '@angular/core';

import { environment } from '../../../../environments/environment';
import {MusiqueProvider} from "../../../services/providers/musique.providers";
import {Musique} from "../../../models/musique";

@Component({
  selector: 'app-media-downloads',
  template: `
    <section fxLayout="row" fxLayoutAlign="center start">
      <mat-card fxFlex="30" class="mat-elevation-z4">
        <mat-card-header>
          <mat-card-title>TELECHARGEMENTS</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-list>
            <mat-list-item *ngFor="let musique of musiques">
              <mat-icon mat-list-icon>video_label</mat-icon>
              <div mat-line>{{musique.titre}}</div>
              <div mat-line>{{musique.annee}}</div>
              <div fxLayout="row" fxLayoutAlign="center center">
                <a mat-stroked-button color="primary" [href]="apiStatic + 'audios/' + musique.id + '.mp3'" [download]="musique.titre + '.mp3'">MP3</a>
                <a color="accent" mat-stroked-button [href]="apiStatic + 'videos/' + musique.id + '.mp4'" [download]="musique.titre + '.mp4'">MP4</a>
              </div>
            </mat-list-item>
          </mat-list>
        </mat-card-content>
      </mat-card>
    </section>
  `,
  styles: [
      "div a { margin: 5px; }",
      "mat-card { margin-top: 30px; }"
  ]
})
export class MediaDownloadsComponent implements OnInit {
  apiStatic: string = `${environment.api}/static/`;
  avatarStyle = {
    'background-size': 'cover',
    'background-image': `'url(${this.apiStatic}/images/cash_b-ligue_1.jpg)'`
  };
  musiques: Musique[] = [];

  constructor(private musiqueProvider: MusiqueProvider) {}

  ngOnInit(): void {
    this.musiqueProvider.gets().subscribe(ms => this.musiques = ms);
  }

}
