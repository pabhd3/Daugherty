import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

import { LocalStorageService } from "./localStorage.service";
import { User } from "../shared/user";
import { Result } from "../shared/response/result";

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
            return this.http.post<Result<User>>("/api/login", user).map((response: Result<User>): User => {
                const userResponse: User = response._data;
                this.userSubject.next(userResponse);
                this.localStorageService.setItem("user", JSON.stringify(userResponse));
                return userResponse;
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