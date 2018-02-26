# DBS SA&E Angular Exercises

## Exercise 9

### Angular Concepts

* Trigger events by key events `(keyup)`
* Using `HttpClient` with query params
* Using angular ngForOf

### Details

Add filters to the users page. These should entail a search field that can be used for the following user properties:

* id
* username
* firstName
* lastName
* email

The filtering capability should also include an indicator for whether to sort the results ascending or descending.

You should automatically apply filters and search upon changing filters (do not rely on a button to be clicked)

You will need to enhance your `UserService` to accept parameters to be used as query parameters to the `GET /api/users` RESTful API. The query params are as follows:

* `filterProp` (default "id") - property which to filter/search by (use one of the above listed)
* `filterText` (default "") - search criteria for the `filterProp`
* `sortAsc` (default "true") - indicator for sorting ascending/descending
* `max` (default "10") - maximum number of records to return
* `offset` (default "0") - offset to start returning records from (use in combination with `max`)

### Web Resources

* https://angular.io/api/common/NgForOf
* https://material.angular.io/components/select/examples
* https://material.angular.io/components/checkbox/examples
