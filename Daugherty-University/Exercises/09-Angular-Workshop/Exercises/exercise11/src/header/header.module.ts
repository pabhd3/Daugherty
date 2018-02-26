import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatMenuModule } from "@angular/material";

import { HeaderComponent } from "./header.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        FlexLayoutModule,
        MatButtonModule,
        MatMenuModule,
        CommonModule,
        RouterModule
    ],
    exports: [HeaderComponent]
})
export class HeaderModule { }