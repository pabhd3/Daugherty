import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material";

import { UserService } from "../user.service";
import { User } from "../../shared/user";

@Component({
  templateUrl: "./user-view.component.html",
  styleUrls: ["../../../../shared/styles/user.scss"]
})
export class UserViewComponent implements OnInit {
  private userService: UserService;
  private route: ActivatedRoute;
  private snackBar: MatSnackBar;

  public user: User;

  constructor(userService: UserService, route: ActivatedRoute, snackBar: MatSnackBar) {
    this.userService = userService;
    this.route = route;
    this.snackBar = snackBar;
  }

  ngOnInit(): void {
    this.getUserById();
  }

  private async getUserById(): Promise<void> {
    try {
      const id: number = Number.parseInt(this.route.snapshot.paramMap.get("id"));
      this.user = await this.userService.getUserById(id);
    } catch (error) {
      this.snackBar.open(<string>error, undefined, {
        duration: 3000,
        verticalPosition: "top"
    });
    }
  }
}