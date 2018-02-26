import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";

import { User } from "../shared/user";

@Injectable()
export class AuthService {
  private userSubject = new ReplaySubject<User>();

  constructor() {
  }

  public login(user: User): Promise<void> {
    return new Promise((resolve: Function, reject: Function) => {
      if (user.username && user.password) {
        // TODO: use HttpClient instead to call /login
        user.password = undefined;
        this.userSubject.next(user);
        return resolve();
      } else {
        return reject("Failed to login user!");
      }
    });
  }

  public getUser(): Observable<User> {
    // TODO: use local storage to set user if user exists
    return this.userSubject.asObservable();
  }
}