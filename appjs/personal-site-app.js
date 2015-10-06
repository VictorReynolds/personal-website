var app = angular.module('personal-site',['ngRoute']);

app.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'partials/main.html', activetab: 'home'})
      .when('/projects', {templateUrl: 'partials/projects.html', activetab: 'projects'})
      .otherwise({redirectTo: "/"});
  }]);


var content_locations = {
	'home': './content/home.html',
	'projects': './content/projects.html'
}

// app.controller('navigation_controller', ['$scope', '$location', function($scope, $location) {
//   $scope.view = 'home';

//   $scope.content_from_view = function() {
//   	return content_locations[$scope.view];
//   };

//   $scope.set_view = function(view_val) {
//   	$scope.view = view_val;
//   };

// }]);