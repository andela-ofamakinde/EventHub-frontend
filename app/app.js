var EventApp = angular.module('EventApp', ['ngMaterial', 'ngRoute']);

EventApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/homeview', {
      templateUrl: 'app/views/home.view.html',
      controller: 'EventCtrl'
    }).
     otherwise({
      redirectTo: '/homeview'
    });
  }]);