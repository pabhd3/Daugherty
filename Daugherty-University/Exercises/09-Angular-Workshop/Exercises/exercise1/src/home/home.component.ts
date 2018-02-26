import { Component } from "@angular/core";
import { User } from "../shared/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["../../../shared/styles/home.scss"]
})
export class HomeComponent {
  public loggedInUser: User;
  // TODO: Bind username and password to inputs
  public user: User = new User();

  // TODO: Bind login to button
  public login(): void {
    // TODO: Validate inputs are defined
    // TODO: Assign username to loggedInUser
  }
}
