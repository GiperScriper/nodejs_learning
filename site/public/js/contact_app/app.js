"use strict";

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
    
    // avoid hash-bang in url
    $locationProvider.html5Mode(true);
    
    //routes for Contacts page
    $routeProvider
     .when('/contacts/new', { 
            templateUrl: 'js/contact_app/templates/newContact.html', 
            controller: 'newContactCtrl'
        })            
});


app.controller('mainCtrl', function ($scope) {
    $scope.message = 'Angular contact app';
});


app.controller('newContactCtrl', function ($scope) {
    $scope.message = 'new contact app';
});