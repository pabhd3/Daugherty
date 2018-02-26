import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatInputModule, MatButtonModule, MatFormFieldModule } from "@angular/material";
import { HomeComponent } from "./home.component";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
