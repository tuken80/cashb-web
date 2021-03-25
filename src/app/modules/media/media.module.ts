import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MaterialModule} from '../material.module';

import { MediaOnlineComponent } from './components/online.component';
import { MediaDownloadsComponent } from './components/downloads.component';

import {MusiqueProvider} from "../../services/providers/musique.providers";

import {MediaRoutingModule} from './media-routing.module';
import {PlayerAudioComponent} from "./components/player-audio.component";
import {PlayerVideoComponent} from "./components/player-video.component";

@NgModule({
  declarations: [
    MediaOnlineComponent,
    MediaDownloadsComponent,
      PlayerAudioComponent,
      PlayerVideoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    MediaRoutingModule
  ],
  providers: [
      MusiqueProvider
  ]
})
export class MediaModule { }
