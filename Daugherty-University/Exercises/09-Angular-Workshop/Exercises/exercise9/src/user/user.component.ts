import { Component, OnInit } from "@angular/core";
import { User } from "../shared/user";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["../../../shared/styles/user.scss"]
})
export class UserComponent implements OnInit {
  private route: ActivatedRoute;

  public users: User[] = [];
  public userColumns: string[] = ["id", "username", "firstName", "lastName", "email", "phone", "dob"];

  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit(): void {
    this.route.data.subscribe(({ users }) => {
      this.users = users;
    });
  }
}