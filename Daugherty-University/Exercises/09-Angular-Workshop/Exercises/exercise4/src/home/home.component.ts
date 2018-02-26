import { Component, OnDestroy, OnInit } from "@angular/core";
import { User } from "../shared/user";
import { MatSnackBar } from "@angular/material";
import { AuthService } from "../services/auth.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["../../../shared/styles/home.scss"]
})
export class HomeComponent implements OnDestroy, OnInit {
  private snackBar: MatSnackBar;
  private authService: AuthService;

  public loggedInUser: User;
  public user: User = new User();
  private userSubscription: Subscription;

  constructor(snackBar: MatSnackBar, authService: AuthService) {
    this.snackBar = snackBar;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.getUser().subscribe((user: User) => this.loggedInUser = user);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  public async login(): Promise<void> {
    try {
      await this.authService.login(this.user);
    } catch (error) {
      this.snackBar.open(<string>error, undefined, {
        duration: 3000,
        verticalPosition: "top"
      });
    }

  }
}