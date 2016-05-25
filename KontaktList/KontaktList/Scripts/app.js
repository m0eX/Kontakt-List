var app = angular.module("KontaktListApp", ["KontaktListApp.controllers", "ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
    when("/",
    {
        templateUrl: "/Partials/ContactList.html",
        controller: "MainController"
    }).
        when("/AddContact",
    {
        templateUrl: "/Partials/AddContact.html",
        controller: "AddContactController"
    }).
        when("/EditContact/:id",
    {
        templateUrl: "/Partials/EditContact.html",
        controller: "EditContactController"
    }).
    otherwise({redirectTo:"/"});
}])