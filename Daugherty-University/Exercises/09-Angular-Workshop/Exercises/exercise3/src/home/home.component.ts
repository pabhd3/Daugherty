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
  private snackBar: MatSnackBar;

  constructor(snackBar: MatSnackBar) {
    this.snackBar = snackBar;
  }

  public login(): void {
    // TODO: login user using authService
    if (this.user.username && this.user.password) {
      this.loggedInUser = this.user;
    } else {
      this.snackBar.open("Failed to login user!", undefined, {
        duration: 3000,
        verticalPosition: "top"
      });
    }
  }
}