import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user.routing";
import { MatTableModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatCheckboxModule } from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolve";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
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