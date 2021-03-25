import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login.component';
import { LoginFormComponent } from './forms/login-form.component';

import {SessionRoutingModule} from './session-routing.module';

@NgModule({
    declarations: [
      LoginComponent,
      LoginFormComponent
    ],
    imports: [
      CommonModule,
      SessionRoutingModule
    ]
})
export class SessionModule { }
