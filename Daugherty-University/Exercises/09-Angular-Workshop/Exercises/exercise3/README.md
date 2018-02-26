# DBS SA&E Angular Exercises

## Exercise 3

### Angular Concepts

* Use an angular service method that returns a promise
* Utilize angular's eventing (publish/subscribe) mechanism to update component data from a central source
* Utilize angular's component lifecycle hooks
* Import angular modules into your module

### Details

Enhance the `login` method on the `HomeComponent` to use the `authService.login` service method and show logged-in user in the header by 
subscribing to the `authService.getUser()` observable and binding the user information in `header.component.html`. Utilize angular's `OnInit` and `OnDestroy` to
subscribe and unsubscribe, respectively, from the observable in your `HeaderComponent`. For this exercise, use the built-in angular directive `ngIf` to show/hide 
the logged-in user. NOTE: You'll need to import the `CommonModule` from `@angular/common` and put it into the `imports` of your `HeaderModule` to use `ngIf`.

### Web Resources

* http://jasonwatmore.com/post/2016/12/01/angular-2-communicating-between-components-with-observable-subject
* https://angular.io/guide/lifecycle-hooks
* https://angular.io/api/common/NgIf
* https://angular.io/guide/ngmodules

