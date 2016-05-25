angular.module("KontaktListApp.controllers", []).
controller("MainController", function ($scope,KontaktService) {
    $scope.message = "Main controller";
    KontaktService.GetContactsFromDB().then(function (d) {
        $scope.listKontakti = d.data.list;
    })
    $scope.DeleteContact=function(id,index)
    {
        $scope.listKontakti.splice(index, 1);
        KontaktService.DeleteContact(id);
    }
}).
    controller("AddContactController", function ($scope,KontaktService) {
        $scope.message = "Dodaj kontakt";
        $scope.AddContact=function()
        {
            KontaktService.AddContact($scope.kontakt);
        }
    }).controller("EditContactController", function ($scope,KontaktService,$routeParams) {
        $scope.message = "Uredi kontakt";
        var id = $routeParams.id;
        KontaktService.GetContactByID(id).then(function (d) {
            $scope.kontakt = d.data.kontakt;
        })
        $scope.EditContact=function()
        {
            KontaktService.EditContact($scope.kontakt);
        }
    }).
factory("KontaktService", ["$http", function ($http) 
 {
    var fac = {};
    fac.GetContactsFromDB = function () {
       return $http.get("/Kontakt/GetContacts");
    }
    fac.GetContactByID = function (id) 
    {
        return $http.get("/Kontakt/GetContactById", { params: { id: id }});
    }
    fac.AddContact = function(kontakt)
    {
        $http.post("/Kontakt/AddContact",kontakt).success(function(response){
        alert(response.status);
        })
    }
    fac.EditContact = function(kontakt)
    {
        $http.post("/Kontakt/EditContact",kontakt).success(function(response){
            alert(response.status);
        })
    }
    fac.DeleteContact = function (id) {
        $http.post("/Kontakt/DeleteContact", { id: id }).success(function (response) {
            alert(response.status);
        })
    }
    return fac;
}])