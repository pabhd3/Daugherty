import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppComponent } from "./app.component";
import { HeaderModule } from "../header/header.module";
import { FooterModule } from "../footer/footer.module";
import { HomeModule } from "../home/home.module";
import { AppRouting } from "./app.routing";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    AppRouting // Has to be last
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
