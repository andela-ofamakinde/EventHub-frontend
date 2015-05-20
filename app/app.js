"use strict";
var EventApp = angular.module('EventApp', ['ngMaterial', 'ngRoute', 'ngStorage']);

EventApp.config(['$routeProvider','$mdThemingProvider',
  function($routeProvider,$mdThemingProvider) {

    $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('orange');

    $routeProvider.
    when('/home', {
      templateUrl: 'app/views/home.view.html'
    }).
    when('/events', {
      templateUrl: 'app/views/event.view.html',
      controller: 'EventCtrl',
    }).
    when('/signup', {
      templateUrl: 'app/views/signup.view.html',
      controller: 'UserCtrl'
    }).
    when('/login', {
      templateUrl: 'app/views/login.view.html',
      controller: 'UserCtrl'
    }).
    when('/editpage/:event_id', {
      templateUrl: 'app/views/editevent.view.html',
      controller: 'EditCtrl'
    }).
    when('/profile', {
      templateUrl: 'app/views/user.profile.html',
      controller: 'ProfileCtrl',
      resolve: {
        JoinEvents: function(UserFactory, EventFactory) {
          var currentUser = UserFactory.currentUser();
          return EventFactory.getEventsJoined(currentUser._id);
        },
        UserEvents: function(UserFactory, EventFactory) {
          var currentUser = UserFactory.currentUser();
          return EventFactory.getUserEvents(currentUser._id);
        }
      }
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
      config.headers = config.headers || {};
      if ($localStorage.token) {
        config.headers['x-access-token'] = $localStorage.token;
      }
      return config;
    },
    'responseError': function(response) {
      if(response.status === 401 || response.status === 403) {
          $location.path('/login');
      }
      return $q.reject(response);
    }
    };
  }]);
});