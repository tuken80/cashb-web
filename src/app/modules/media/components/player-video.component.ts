import {Component, Input} from '@angular/core';

import { environment } from "../../../../environments/environment";

@Component({
    selector: 'app-media-player-video',
    template: `
        <video [src]="apiVideoPath + id + '.mp4'" controls>
            <p>Votre navigateur ne supporte pas le lancement de vidéos. Vous pouvez malgré tout télécharger la vidéo gràce à ce lien : <a [href]="apiVideoPath + id + '.mp4'">TELECHARGEMENT</a>.</p>
        </video>
  `,
    styles: [
        "video { width: 80vh; }",
    ]
})
export class PlayerVideoComponent {
    @Input() id: number;
    apiVideoPath: string = `${environment.api}/static/videos/`;
}
