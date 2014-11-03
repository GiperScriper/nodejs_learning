(function(){

	var app = angular.module('app', ['ngResource', 'ngRoute']);

	app.config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', { templateUrl: 'index' , controller: 'mainCtrl'})
	});

	app.controller('mainCtrl', function ($scope){
		$scope.myVar = 'Hello Angular';
	});

})();
