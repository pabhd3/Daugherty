import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

import { LocalStorageService } from "./localStorage.service";
import { User } from "../shared/user";
import { Result } from "../shared/result";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  private userSubject = new ReplaySubject<User>();

  private localStorageService: LocalStorageService;
  private http: HttpClient;
  private router: Router;

  constructor(localStorageService: LocalStorageService, httpClient: HttpClient, router: Router) {
    this.localStorageService = localStorageService;
    this.http = httpClient;
    this.router = router;
    this.init();
  }

  private init(): void {
    const userJsonStr: string | null = this.localStorageService.getItem("user");

    if (userJsonStr !== null) {
      const user: User = JSON.parse(userJsonStr);
      this.userSubject.next(user);
    }
  }

  public login(user: User): Promise<User> {
    if (user.username && user.password) {
      return this.http.post<Result<User>>("/api/login", user).map((result: Result<User>): User => {
        const loggedInUser: User = result._data;
        this.userSubject.next(loggedInUser);
        this.localStorageService.setItem("user", JSON.stringify(loggedInUser));
        return loggedInUser;
      })
        .toPromise()
        .catch(() => Promise.reject("An error occurred when attempting to login."));
    } else {
      return Promise.reject("Invalid username or password.");
    }
  }

  public logout(): void {
    this.localStorageService.removeItem("user");
    this.userSubject.next(undefined);
    this.router.navigate([""]);
  }

  public getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }
}