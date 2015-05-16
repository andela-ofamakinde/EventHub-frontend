"use strict";
var EventApp = angular.module('EventApp', ['ngMaterial', 'ngRoute']);

EventApp.config(['$routeProvider','$mdThemingProvider',
  function($routeProvider,$mdThemingProvider) {
     var blackMap = $mdThemingProvider.extendPalette('red', {
        '500': 'F8F8FF'
      });
   $mdThemingProvider.definePalette('black', blackMap);

    $mdThemingProvider.theme('default')
    .primaryPalette('black')
    .accentPalette('orange');

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
    when('/login', {
      templateUrl: 'app/views/login.view.html',
      controller: 'UserCtrl'
    }).
     otherwise({
      redirectTo: '/home'
    });
}]);