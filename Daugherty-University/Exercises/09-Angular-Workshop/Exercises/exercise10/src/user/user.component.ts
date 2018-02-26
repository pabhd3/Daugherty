import { Component, OnInit } from "@angular/core";
import { User } from "../shared/user";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./user.service";
import { UserSearchParams } from "./models/userSearchParams";
import { UserFilterOption } from "./models/userFilterOption";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["../../../shared/styles/user.scss"]
})
export class UserComponent implements OnInit {
  private route: ActivatedRoute;
  private userService: UserService;

  public users: User[] = [];
  public userColumns: string[] = ["id", "username", "firstName", "lastName", "email", "phone", "dob", "isActive"];
  public userFilters: UserFilterOption[] = [
    { name: "Id", value: "id" },
    { name: "First Name", value: "firstName" },
    { name: "Last Name", value: "lastName" },
    { name: "Username", value: "username" },
    { name: "Email", value: "email" }
  ];

  public searchFor: string;
  public searchBy: string;
  public sortAsc: boolean;

  constructor(route: ActivatedRoute, userService: UserService) {
    this.route = route;
    this.userService = userService;
  }

  ngOnInit(): void {
    this.searchBy = "id";
    this.sortAsc = true;
    this.route.data.subscribe(({ users }) => {
      this.users = users;
    });
  }

  public async search(): Promise<void> {
    const userSearchParams: UserSearchParams = new UserSearchParams();
    userSearchParams.filterProp = this.searchBy;
    userSearchParams.filterText = this.searchFor;
    userSearchParams.sortAsc = this.sortAsc;

    this.users = await this.userService.getUsers(userSearchParams);
  }
}