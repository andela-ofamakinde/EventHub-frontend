"use strict";
var EventApp = angular.module('EventApp', ['ngMaterial', 'ngRoute']);

EventApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/home', {
      templateUrl: 'app/views/home.view.html'
    }).
    when('/events', {
      templateUrl: 'app/views/event.view.html',
      controller: 'EventCtrl'
    }).
    when('/signup', {
      templateUrl: 'app/views/signup.view.html',
      controller: 'UserCtrl'
    }).
     otherwise({
      redirectTo: '/home'
    });
}]);