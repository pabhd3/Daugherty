import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

import { User } from "../shared/user";
import { UserService } from "./user.service";

@Injectable()
export class UserResolver implements Resolve<User[]> {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {
        return this.userService.getUsers();
    }
}