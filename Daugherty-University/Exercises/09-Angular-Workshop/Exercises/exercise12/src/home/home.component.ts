import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";

import { User } from "../shared/user";
import { AuthService } from "../services/auth.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["../../../shared/styles/home.scss"]
})
export class HomeComponent implements OnDestroy, OnInit {
    private snackBar: MatSnackBar;
    private authService: AuthService;
    private router: Router;

    public loggedInUser: User;
    public user: User = new User();
    private userSubscription: Subscription;

    constructor(snackBar: MatSnackBar, authService: AuthService, router: Router) {
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
    }

    ngOnInit(): void {
        this.userSubscription = this.authService.getUser().subscribe((user: User) => this.loggedInUser = user);
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

    public async login(): Promise<void> {
        try {
            await this.authService.login(this.user);
            this.router.navigate(["users"]);
        } catch (error) {
            this.snackBar.open(<string>error, undefined, {
                duration: 3000,
                verticalPosition: "top"
            });
        }

    }
}