import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatSnackBarModule } from "@angular/material";
import { HomeComponent } from "./home.component";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
