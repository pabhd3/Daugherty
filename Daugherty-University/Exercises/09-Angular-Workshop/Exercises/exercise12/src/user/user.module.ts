import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user.routing";
import {
  MatTableModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatButtonModule, MatCardModule
} from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolve";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserViewModule } from "./user-view/user-view.module";
import { UserCreateModule } from "./user-create/user-create.module";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CdkTableModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    UserViewModule,
    UserCreateModule,
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