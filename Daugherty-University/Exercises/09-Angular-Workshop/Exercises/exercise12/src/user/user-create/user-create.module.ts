import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatRadioModule } from "@angular/material";
import { CommonModule } from "@angular/common";

import { UserCreateComponent } from "./user-create.component";

@NgModule({
  declarations: [
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    RouterModule
  ],
  exports: [
    UserCreateComponent
  ]
})
export class UserCreateModule { }