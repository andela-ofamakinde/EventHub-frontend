"use strict";
angular.module('EventApp')
  .controller('EventCtrl', ['$scope', 'EventFactory', 'UserFactory', 
    function($scope, EventFactory, UserFactory){

    $scope.currentuser = UserFactory.currentUser;

    $scope.createEvent = function(){
      $scope.event.userId = $scope.currentuser._id;
      EventFactory.createEvent($scope.event, function(data){
      console.log(data);
      }, function(err){

      });
    };

    $scope.getEvents = function() {
      EventFactory.getEvents(function(data){
        $scope.data = data;

      }, function(err){

      });
    };

    $scope.joinEvent = function(id) {
      var user = {
        user_id: $scope.currentuser._id,
        event_id: id
      };

      EventFactory.joinEvent(user, function(data){
        console.log(data);
      }, function(err){
          console.log(err);
      });
    };

  }]);