# DBS SA&E Angular Exercises

## Exercise 5

### Angular Concepts

### Details

Allow a logged-in user to logout via a button in `header.component.html` and a subsequent action in `HeaderComponent` that utilizes a new method,
`authService.logout`, which should make an AJAX request to `POST /api/logout` and upon success, remove the previously stored user from localStorage via
`localStorageService.removeItem`. Afterward, the user should see the login page and user information removed from the header. You can achieve this by utilizing the
pub/sub you previously setup. We are going to use `MatMenu` to nest the Logout button under the username but that part isn't neccessary to complete the exercise. See https://material.angular.io/components/menu/overview.