"use strict";
angular.module('EventApp')
.factory('EventFactory',['$http', function($http){
  var baseUrl = 'https://event-hub.herokuapp.com';
  var myFactory = {};
    myFactory.getEvents = function(){
      return $http.get(baseUrl + '/allevents');
    };
    myFactory.getOneEvent = function(){
      return $http.get(baseUrl + '/allevents/:event_id');
    };

   return myFactory; 
  }]);
