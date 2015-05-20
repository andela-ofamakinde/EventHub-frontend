"use strict";
angular.module('EventApp')
  .controller('EventCtrl', ['$rootScope','$scope', '$location','EventFactory', 'UserFactory', 
    function($rootScope,$scope, $location, EventFactory, UserFactory){

    $scope.createEvent = function(){
      $scope.currentuser = UserFactory.currentUser();
      $scope.event.userId = $scope.currentuser._id;
      console.log($scope.event.userId);
      EventFactory.createEvent($scope.event, function(data){
        console.log(data);
        $rootScope.isloggedin =  true;
        $location.path('/profile');
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

    $scope.deleteEvent = function(event_id, index){
      EventFactory.deleteOneEvent(event_id)
      .success(function(data){
        $rootScope.eventlist.splice(index, 1);
      })
      .error(function(err){

      });
    };

  }]);