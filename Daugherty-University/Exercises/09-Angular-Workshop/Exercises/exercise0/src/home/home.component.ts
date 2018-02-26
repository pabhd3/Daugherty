import { Component } from "@angular/core";
import { User } from "../shared/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  public loggedInUser: string;
  public user: User;

  public login(): void {
    if (this.user.username && this.user.password) {
      this.loggedInUser = this.user.username;
    } else {
      // snackbar!
    }
  }
}