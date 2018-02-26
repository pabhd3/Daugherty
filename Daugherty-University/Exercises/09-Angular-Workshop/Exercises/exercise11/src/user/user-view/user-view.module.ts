import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule, MatButtonModule, MatSnackBarModule } from "@angular/material";

import { UserViewComponent } from "./user-view.component";

@NgModule({
  declarations: [
    UserViewComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    UserViewComponent
  ]
})
export class UserViewModule { }