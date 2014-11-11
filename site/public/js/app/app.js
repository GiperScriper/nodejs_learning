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


            $scope.saveUser = function () {
               var newUser = $resource('http://localhost:4000/users');
               if (newUser.save({name: "Jorik", password: "just"})) {
                    console.log('saved');
                    $scope.events.push(newUser);
                    
               }
            };           

            
    });


    // custom filter
    app.filter('aditionToBody', function () {
        return function (input) {
            return input + "ADITION FROM FILTER";
        };
    });    


//}());
