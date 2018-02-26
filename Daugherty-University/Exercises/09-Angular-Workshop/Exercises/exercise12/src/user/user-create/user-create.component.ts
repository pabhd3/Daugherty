import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "../../shared/user";
import { UserService } from "../user.service";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: "./user-create.component.html",
  styleUrls: ["../../../../shared/styles/user.scss"]
})
export class UserCreateComponent {
  private userService: UserService;
  private router: Router;

  public user: User = new User();

  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this.router = router;
  }

  public async createUser(form: NgForm): Promise<void> {
    if (form.valid) {
      await this.userService.createUser(this.user);
      this.router.navigate([`users`]);
    }
  }
}