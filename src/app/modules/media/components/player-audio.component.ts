import {Component, Input} from '@angular/core';

import { environment } from "../../../../environments/environment";

@Component({
    selector: 'app-media-player-audio',
    template: `
        <audio [src]="apiAudioPath + id + '.mp3'" controls>
          <p>Votre navigateur ne supporte pas le lancement de fichier audio. Vous pouvez malgré tout télécharger la vidéo gràce à ce lien : <a [href]="apiAudioPath + id + '.mp3'">TELECHARGEMENT</a>.</p>
        </audio>
  `,
    styles: [
        "audio { margin: 50px; }"
    ]
})
export class PlayerAudioComponent {
    @Input() id: number;
    apiAudioPath: string = `${environment.api}/static/audios/`;
}
