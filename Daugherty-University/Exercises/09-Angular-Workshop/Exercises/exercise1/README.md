# DBS SA&E Angular Exercises

## Exercise 1

### Angular Concepts

* Binding variables
* Event Handling
* Built-in directives

### Details

You have been provided a `HomeComponent` and its template (home.component.html). `HomeComponent` contains a property `user` which contains a 
`username` and `password` field that should be bound to the login form input fields in home.html using `ngModel`.
You have also been provided a function `login` on `HomeComponent` which should be used as the login form submit handler via `ngSubmit`. This `login` function should 
validate that `username` and `password` are not empty. Once validated, set `loggedInUser` to provided `username` and bind the html `hidden` property to hide the login form. 
If the validation fails, use `console.log(msg)` where `msg` is a string indicating the error.

### Web Resources

* https://angular.io/api/forms/NgModel (see How To Use)
* https://angular.io/guide/forms#submit-the-form-with-ngsubmit
* https://angular.io/guide/template-syntax#property-binding
