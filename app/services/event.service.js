"use strict";

angular.module('EventApp')
.factory('EventFactory',['$http', function($http){
  var baseUrl = 'https://event-hub.herokuapp.com/';
  // var localUrl = 'http://localhost:5000/';
  
  var EventsFac = {
    createEvent: function(event, success, error) {
      $http.post(baseUrl + 'createevent', event)
        .success(success)
        .error(error);
    },
    getEvents : function(success, error) {
      $http.get(baseUrl + 'allevents')
      .success(success)
      .error(error);
    },
    joinEvent : function(user, success, error) {
      $http.post(baseUrl+ 'allevents/' + user.event_id + '/joinevent', user.user)
      .success(success)
      .error(error);
    },
    getOneEvent: function(event_id, success, error) {
      $http.get(baseUrl+ 'allevents/' + event_id)
      .success(success)
      .error(error);
    }
  };

  return EventsFac; 
  }]);
