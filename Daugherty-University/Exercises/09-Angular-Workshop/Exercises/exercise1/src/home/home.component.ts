import { Component } from "@angular/core";
import { User } from "../shared/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["../../../shared/styles/home.scss"]
})
export class HomeComponent {
  public loggedInUser: User;
  public user: User = new User();

  public login(): void {
    if (this.user.username !== undefined && this.user.password !== undefined) {
      this.loggedInUser.username = this.user.username;
    }
  }
}
