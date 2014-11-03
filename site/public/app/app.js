(function(){

	var app = angular.module('app', ['ngResource', 'ngRoute']);

	app.config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', { templateUrl: 'index' , controller: 'mainCtrl'})
	});

	app.controller('mainCtrl', function ($scope, $http){
		$scope.myVar = 'Hello Angular';
        
        // Simple GET request example :
        var test = $http.get('http://localhost:4000/users');
        console.log(test);
        // var users = $http.get('http://localhost:4000/users')
        //     .then(function (response){
        //          $scope.users = response.data;
        // });       
        
        //var onSuccess = function(data){
        //    $scope.users = data;
        //};

        $scope.loadUsers = function (){
            $http.get('http://localhost:4000/users')
            .then(function (response){
                console.log('Load Users..');
                 $scope.users = response.data;
            });
        };
        
    });

})();
