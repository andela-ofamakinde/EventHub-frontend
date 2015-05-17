"use strict";
var EventApp = angular.module('EventApp', ['ngMaterial', 'ngRoute', 'ngStorage']);

EventApp.config(['$routeProvider','$mdThemingProvider',
  function($routeProvider,$mdThemingProvider) {
   //   var blackMap = $mdThemingProvider.extendPalette('red', {
   //      '500': 'F8F8FF'
   //    });
   // $mdThemingProvider.definePalette('black', blackMap);

    $mdThemingProvider.theme('default')
    .primaryPalette('red')
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

EventApp.config(function($httpProvider) {
  $httpProvider.interceptors.push(['$q', '$location', '$localStorage', 
    function($q, $location, $localStorage) {
    return {
    'request': function (config) {
      console.log(config);
      config.headers = config.headers || {};
      if ($localStorage.token) {
          config.headers.Authorization = 'Bearer ' + $localStorage.token;
      }
      return config;
    },
    'responseError': function(response) {
      if(response.status === 401 || response.status === 403) {
          $location.path('/signin');
      }
      return $q.reject(response);
    }
    };
  }]);
});