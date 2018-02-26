# DBS SA&E Angular Exercises

## Exercise 11

### Angular Concepts

* angular form validation
* angular material error label

### Details

Add the ability to create a new user. Add a button to the users page which, when clicked, takes the user to a new
create user page. You will need to create a new route `/users/create` and wire it up to a new component, `UserCreateComponent` and
a new template `user-create.component.html`. 

On this page you should capture all user information:

* firstName
* lastName
* username
* birthdate
* gender
* email
* phone
* address
    * line1
    * line2
    * city
    * state
    * zip

Using the default HTML5 `required` attribute, ensure the form is valid via angular before saving the user.
 
Enhance the `UserService` to allow the creation of a user by utilizing the RESTful API `POST /api/users` and providing the user object as the body of the request.
The API will return the saved user, populated with a unique id.

Once the new user has been successfully saved, navigate back to the Users page with the up-to-date users data.

### Web Resources

* https://angular.io/guide/forms
* https://angular.io/api/forms/NgForm
* https://material.angular.io/components/form-field/examples
