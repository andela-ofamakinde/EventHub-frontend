"use strict";
angular.module('EventApp')
  .controller('EventCtrl', ['$scope', 'EventFactory', 'UserFactory', function($scope, EventFactory, UserFactory){

      $scope.currentuser = UserFactory.currentUser;
    // EventFactory.getEvents()
    // .success(function(data){
    //   $scope.data = data;
    // })
    // .error(function(err){
    // });

    $scope.createEvent = function(){
      $scope.event.userId = $scope.currentuser._id;
      console.log($scope.event);
      EventFactory.createEvent($scope.event, function(data){
        console.log(data);
      }, function(err){
        console.log(err); 
      });
    };

  }]);