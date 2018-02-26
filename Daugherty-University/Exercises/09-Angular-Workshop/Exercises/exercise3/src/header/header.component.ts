import { Component } from "@angular/core";
import { User } from "../shared/user";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["../../../shared/styles/header.scss"]
})
export class HeaderComponent {
  public user: User;

  constructor() {
    // TODO: subscribe to LOGGED_IN event in AuthSvc to set user
  }
}