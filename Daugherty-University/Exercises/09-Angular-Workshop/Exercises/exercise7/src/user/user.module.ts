import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user.routing";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    FlexLayoutModule,
    UserRoutingModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }