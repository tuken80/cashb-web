import { NgModule } from '@angular/core';

import {LayoutModule} from "@angular/cdk/layout";
import {TextFieldModule} from '@angular/cdk/text-field';

@NgModule({
    exports: [
        LayoutModule,
        TextFieldModule
    ]
})
export class CdkModule { }
