"use strict";

angular.module('EventApp')
.factory('EventFactory',['$http', function($http){
  var BASE_URL = 'https://event-hub.herokuapp.com/';
  // var BASE_URL = 'http://localhost:5000/';

  var EventsFac = {
    createEvent: function(event, success, error) {
      $http.post(BASE_URL + 'createevent', event)
        .success(success)
        .error(error);
    },

    getEvents : function(success, error) {
      return $http.get(BASE_URL + 'allevents');
    },

    getUserEvents: function(userid) {
      return $http.get(BASE_URL + 'events/' + userid);
    },

    getEventsJoined: function(userid) {
      return $http.get(BASE_URL + 'events/' + userid + '/joined');
    },

    joinEvent : function(eventid) {
      return $http.post(BASE_URL + 'event/' + eventid + '/joinevent');
    },

    getOneEvent: function(event_id) {
      return $http.get(BASE_URL +'event/' + event_id);
    },

    deleteOneEvent: function(event_id){
      return $http.delete(BASE_URL + 'event/'+event_id);
    },

    updateEvent: function(event_id, event) {
      return $http.put(BASE_URL + 'event/' + event_id, event);
    }
  };

  return EventsFac; 
  }]);
