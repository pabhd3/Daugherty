import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppComponent } from "./app.component";
import { HeaderModule } from "../header/header.module";
import { FooterModule } from "../footer/footer.module";
import { HomeModule } from "../home/home.module";
import { AuthService } from "../services/auth.service";
import { LocalStorageService } from "../services/localStorage.service";
import { AppRouting } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    AppRouting // Has to be last
  ],
  providers: [AuthService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
