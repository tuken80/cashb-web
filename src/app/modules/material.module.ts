import { NgModule } from '@angular/core';

import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    exports: [
        MatProgressBarModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatCardModule,
        MatListModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatIconModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatTabsModule
    ]
})
export class MaterialModule { }
