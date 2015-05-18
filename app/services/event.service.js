"use strict";

angular.module('EventApp')
.factory('EventFactory',['$http', function($http){
  var baseUrl = 'https://event-hub.herokuapp.com/';
  var localUrl = 'http://localhost:5000/';
  var EventsFac = {
    // getEvents :function(){
    //   return $http.get(baseUrl + '/allevents');
    // },
    // getOneEvent : function(){
    //   return $http.get(baseUrl + '/allevents/:event_id');
    // },
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
      console.log(user);
      $http.post(localUrl+ 'allevents/' + user.event_id + '/joinevent', user.user)
      .success(success)
      .error(error);
    }
  };

  return EventsFac; 
  }]);
