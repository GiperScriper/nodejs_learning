//(function (){
"use strict";

    var app = angular.module('app', ['ngResource', 'ngRoute']);

    // app.config(function($routeProvider, $locationProvider){
    // 	$locationProvider.html5Mode(true);
    // 	$routeProvider
    // 		.when('/', { templateUrl: 'index' , controller: 'mainCtrl'})
    // });
    
    app.controller('mainCtrl', function ($scope){
        $scope.myVar = 'Hello Angular!';
    });


    app.controller('eventsCtrl', function ($scope, eventsData, $resource) {          
            
            $scope.eventSortOrder = '-votes';             
            
            $scope.events = eventsData.query();                        
            
            $scope.upVote = function (event) {
                event.votes += 1;
            };
            
            $scope.downVote = function (event) {
                event.votes -= 1;
            };


            
            // create resource
            $scope.saveUser = function (saveUserForm) {
               var newUser = $resource('http://localhost:4000/users');
               
                newUser.save($scope.user, function(data){
                    console.log(data);
                }); 
            };


            $scope.deleteUser = function (id) {
                var newUser = $resource('http://localhost:4000/users/:id', { userId: '@id' });
                console.log(newUser.get());
            }           

            
    });


    // custom filter
    app.filter('aditionToBody', function () {
        return function (input) {
            return input + "ADITION FROM FILTER";
        };
    });    


//}());
