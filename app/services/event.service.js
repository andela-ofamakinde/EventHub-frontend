"use strict";

angular.module('EventApp')
.factory('EventFactory',['$http', function($http){
  var baseUrl = 'https://event-hub.herokuapp.com/';
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
      }
    };
  return EventsFac; 
  }]);
