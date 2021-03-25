import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/home.component";
import {LicenseComponent} from "./components/license.component";
import {NotFoundComponent} from "./components/not-found.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'session', loadChildren: () => import(`./modules/session/session.module`).then(m => m.SessionModule) },
  { path: 'media', loadChildren: () => import(`./modules/media/media.module`).then(m => m.MediaModule) },
  { path: 'contact', loadChildren: () => import(`./modules/contact/contact.module`).then(m => m.ContactModule) },
  { path: 'newsletter', loadChildren: () => import(`./modules/newsletter/newsletter.module`).then(m => m.NewsletterModule) },
  { path: 'evenementiel', loadChildren: () => import(`./modules/evenementiel/evenementiel.module`).then(m => m.EvenementielModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
