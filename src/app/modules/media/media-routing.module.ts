import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediaOnlineComponent } from './components/online.component';
import { MediaDownloadsComponent } from './components/downloads.component';

const routes: Routes = [
  { path: 'online', component: MediaOnlineComponent },
  { path: 'downloads', component: MediaDownloadsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MediaRoutingModule {}
