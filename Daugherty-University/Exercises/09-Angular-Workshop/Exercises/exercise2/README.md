# DBS SA&E Angular Exercises

## Exercise 2

### Angular Concepts

* Dependency Injection (DI) of 3rd party service

### Details

The `HomeModule` has a dependency on the `MatSnackBarModule`. This module allows for us to inject the `MatSnackBar` class
into angular components, services, directives, etc. Using the `MatSnackBar` class in `HomeComponent` to replace
the `console.log` error handling you wrote in exercise 1 by invoking `MatSnackBar` where `msg` is the error message you
previously wrote in `console.log`. If implemented successfully, upon an error you should see a red message pop out of the top 
right side of the page.

### Web Resources

* https://angular.io/guide/dependency-injection-in-action
* https://material.angular.io/components/snack-bar/overview
