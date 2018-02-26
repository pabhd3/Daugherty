import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }