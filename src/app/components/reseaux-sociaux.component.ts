import { Component } from '@angular/core';

import { environment} from "../../environments/environment";

@Component({
  selector: 'app-reseaux-sociaux',
  template: `
  <div fxLayout="row" fxLayoutAlign="space-between">
    <button
        (click)="redirectYoutube()"
        matTooltip="Youtube"
        matTooltipPosition="below"
        fxFlex="25">
      <img [src]="apiStaticImages + 'youtube.png'" alt="YouTube access" height="35" width="35" class="transition rotate">
    </button>
    <button
        (click)="redirectFacebook()"
        matTooltip="Facebook"
        matTooltipPosition="below"
        fxFlex="15">
      <img [src]="apiStaticImages + 'facebook.png'" alt="Facebook access" height="30" width="30" class="transition rotate">
    </button>
    <button
        (click)="redirectTwitter()"
        matTooltip="Twitter"
        matTooltipPosition="below"
        fxFlex="15">
      <img [src]="apiStaticImages + 'twitter.png'" alt="Twitter access" height="30" width="30" class="transition rotate">
    </button>
    <button
        (click)="redirectInstagram()"
        matTooltip="Instagram"
        matTooltipPosition="below"
        fxFlex="15">
      <img [src]="apiStaticImages + 'instagram.png'" alt="Instagram access" height="30" width="30" class="transition rotate">
    </button>
  </div>
  `,
  styles: [
      "#buttonFacebook { margin-left: 10px; }",
      "button { cursor: pointer; border: none; background-color: transparent; }"
  ]
})
export class ReseauxSociauxComponent {
  apiStaticImages: string = `${environment.api}/static/images/`;

  redirectYoutube(): void {
    window.location.href = 'https://www.youtube.com/channel/UCP0elXZ7DZHFLYrKrDAqfvg';
  }

  redirectFacebook(): void {
    window.location.href = 'https://www.facebook.com/CashBrolikOfficiel/';
  }

  redirectTwitter(): void {
    window.location.href = 'https://twitter.com/cash_brolik';
  }

  redirectInstagram(): void {
    window.location.href = 'https://www.instagram.com/cash_brolik/';
  }

}
