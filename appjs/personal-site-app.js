var app = angular.module('personal-site',['ngRoute', 'ngAnimate']);

app.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'partials/main.html', activeTab: 'home'})
      .when('/projects', {templateUrl: 'partials/projects.html', activeTab: 'projects'})
      .otherwise({redirectTo: "/"});
  }]);

app.controller('navigation_controller', ['$scope', '$location', '$route', function($scope, $location, $route) {
  $scope.activeTab = function() { return $route.current.activeTab; };

}]);