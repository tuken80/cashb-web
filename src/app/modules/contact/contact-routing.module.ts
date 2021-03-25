import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DemandeContactComponent} from "./components/demande-contact.component";

const routes: Routes = [
  { path: 'demande', component: DemandeContactComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}
