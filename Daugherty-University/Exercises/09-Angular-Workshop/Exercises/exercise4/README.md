# DBS SA&E Angular Exercises

## Exercise 4

### Angular Concepts

* Using angular HttpClient to make real AJAX request
* Using rxjs library to handle Observables (map & toPromise)
* Store logged-in user for client-side caching to prevent re-login when refreshing the page

### Details

Enhance `authService.login` to use a real AJAX call to `POST /api/login` with a body of an object containing the `username` and `password` fields.
You must use the username of one of the users in the server's `seed-data.ts` file for successful login. Password only need be non-empty.
After successful login, the API will return to you the the user object of the user who was logged in. If the user does not exist, the API
will return a 404 error. For this exercise, you can use the username `test`. For all exercises, the password does not matter - it just needs
some value. After receiving user data, store the logged-in user in the browser localStorage via `localStorageService.setItem` so that the user
is auto logged-in on page refresh. NOTE: In order to use the `HttpClient`, you must import `HttpClientModule` into your `AppModule`.

### Web Resources

* https://angular.io/guide/http
* https://angular.io/api/common/http/HttpClient
* http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-map
* http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-subscribe


