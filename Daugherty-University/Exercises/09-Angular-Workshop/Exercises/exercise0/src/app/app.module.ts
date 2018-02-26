import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppComponent } from "./app.component";
import { HomeComponent } from "../home/home.component";
import { HeaderModule } from "../header/header.module";
import { FooterModule } from "../footer/footer.module";
import { AppRouting } from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HeaderModule,
    FooterModule,
    AppRouting // Has to be last
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
