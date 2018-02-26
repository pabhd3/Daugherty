import { Component, OnDestroy, OnInit } from "@angular/core";
import { User } from "../shared/user";
import { AuthService } from "../services/auth.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["../../../shared/styles/header.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authService: AuthService;

  public user: User;
  private userSubscription: Subscription;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.getUser().subscribe((user: User) => this.user = user);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  public logout(): void {
    this.authService.logout();
  }
}
