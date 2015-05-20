"use strict";
angular.module('EventApp')
  .controller('EventCtrl', ['$rootScope','$scope', '$location','EventFactory', 'UserFactory', 
    function($rootScope,$scope, $location, EventFactory, UserFactory){

    $scope.createEvent = function(){
      $scope.currentuser = UserFactory.currentUser();
      $scope.event.userId = $scope.currentuser._id;
      EventFactory.createEvent($scope.event, function(data){
        $rootScope.isloggedin =  true;
        $location.path('/profile');
      }, function(err){
      });
    };

    $scope.getEvents = function() {
      EventFactory.getEvents()
      .success(function(data){
        data.startdate = new Date(data.startdate);
        data.enddate = new Date(data.enddate);
        $scope.events = data;
      })
      .error(function(error){
      }); 
    };

    $scope.joinEvent = function(eventid) {
      EventFactory.joinEvent(eventid)
      .success(function(data){

        $location.path('/profile');
      })
      .error(function(err){

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