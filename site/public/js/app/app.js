(function (){
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


    app.controller('eventsCtrl', function ($scope) {           
            
            
            $scope.events = [{ 
                title: "AAA", 
                body: "Body text Body textBody textBody textBody textBody textBody textBody textBody textBody textBody text",
                date: "11/11/2014",
                votes: 0
            },
            
            {
                title: "BBB", 
                body: "Body text Body textBody textBody textBody textBody textBody textBody textBody textBody textBody text",
                date: "12/11/2014",
                votes: 1
            },

            {
                title: "CCC", 
                body: "Body text Body textBody textBody textBody textBody textBody textBody textBody textBody textBody text",
                date: "12/11/2014",
                votes: 4
            },

            {
                title: "DDD", 
                body: "Body text Body textBody textBody textBody textBody textBody textBody textBody textBody textBody text",
                date: "12/11/2014",
                votes: 3
            },

            { 
                title: "EEE", 
                body: "Body text Body textBody textBody textBody textBody textBody textBody textBody textBody textBody text",
                date: "10/11/2014",
                votes: 2
            }];

            
            $scope.upVote = function (event) {
                event.votes += 1;
            };
            
            $scope.downVote = function (event) {
                event.votes -= 1;
            };

            $scope.eventSortOrder = 'title';
    });

}());
