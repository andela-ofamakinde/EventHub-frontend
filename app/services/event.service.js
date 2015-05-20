"use strict";

angular.module('EventApp')
.factory('EventFactory',['$http', function($http){
  // var BASE_URL = 'https://event-hub.herokuapp.com/';
  var BASE_URL = 'http://localhost:5000/';

  var EventsFac = {
    createEvent: function(event, success, error) {
      $http.post(BASE_URL + 'createevent', event)
        .success(success)
        .error(error);
    },
    getEvents : function(success, error) {
      $http.get(BASE_URL + 'allevents')
      .success(success)
      .error(error);
    },

    getUserEvents: function(userid) {
      return $http.get(BASE_URL + 'events/' + userid);
    },

    joinEvent : function(user, success, error) {
      $http.post(BASE_URL+ 'allevents/' + user.event_id + '/joinevent', user.user)
      .success(success)
      .error(error);
    },
    getOneEvent: function(event_id) {
      return $http.get(BASE_URL +'event/' + event_id);
    },
    deleteOneEvent: function(event_id){
      return $http.delete(BASE_URL + 'event/'+event_id);
    },
    updateEvent: function(event_id) {
      return $http.put(BASE_URL + event_id);
    }
  };

  return EventsFac; 
  }]);
