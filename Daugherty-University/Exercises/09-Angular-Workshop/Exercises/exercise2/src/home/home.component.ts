import { Component } from "@angular/core";
import { User } from "../shared/user";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["../../../shared/styles/home.scss"]
})
export class HomeComponent {
  public loggedInUser: User;
  public user: User = new User();

  public login(): void {
    if (this.user.username && this.user.password) {
      this.loggedInUser = this.user;
    } else {
      // TODO: replace console.log to toastr.error
      console.log("Failed to login user!");
    }
  }
}