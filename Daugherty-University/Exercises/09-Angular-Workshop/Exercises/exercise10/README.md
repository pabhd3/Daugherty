# DBS SA&E Angular Exercises

## Exercise 10

### Angular Concepts

* Using NgClass `[ngClass]`
* Accessing params in the URL using ActivatedRoute

### Details

Allow the viewing of an individual user's details on a new page. This new page should 

Enhance the `UserService` to allow the individual retrieval of a user. You may use the existing API method previously used, however, a more concise API resource exists:

* `GET /api/users/{id}`

On this new page, you should include:

* First and Last name
* username
* active or inactive indicator
* gender
* birthdate
* email
* phone
* address

Furthermore, you will need to enhance the display of the active/inactive indicator by utilizing ng-class to conditionally display the css class `user-active` when the user is *active*.

### Web Resources

* https://angular.io/api/common/NgClass
* https://angular.io/api/router/ActivatedRoute
