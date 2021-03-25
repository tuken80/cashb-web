import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ActualiteListComponent} from "./components/actualite-list.component";
import {ActualiteCreateComponent} from "./components/actualite-create.component";

const routes: Routes = [
  { path: 'actualites', component: ActualiteListComponent },
  { path: 'actualite/add', component: ActualiteCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EvenementielRoutingModule {}
