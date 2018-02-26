import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user.routing";
import { MatTableModule } from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolve";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    FlexLayoutModule,
    CdkTableModule,
    MatTableModule,
    HttpClientModule,
    UserRoutingModule
  ],
  exports: [
    UserComponent
  ],
  providers: [
    UserService,
    UserResolver
  ]
})
export class UserModule { }