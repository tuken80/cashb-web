import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InscriptionComponent} from "./components/inscription.component";

const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class NewsletterRoutingModule {}
