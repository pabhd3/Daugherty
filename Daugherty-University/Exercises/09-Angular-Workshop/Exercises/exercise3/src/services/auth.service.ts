import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";

import { User } from "../shared/user";

@Injectable()
export class AuthService {
  private userSubject = new ReplaySubject<User>();

  public login(user: User): Promise<void> {
    return new Promise((resolve: Function, reject: Function) => {
      if (user.username && user.password) {
        user.password = undefined;
        this.userSubject.next(user);
        return resolve();
      } else {
        return reject("Failed to login user!");
      }
    });
  }

  public getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }
}
