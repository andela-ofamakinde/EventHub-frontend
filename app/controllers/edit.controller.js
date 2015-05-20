"use strict";
angular.module('EventApp')
  .controller('EditCtrl', ['$routeParams', '$scope', '$location','EventFactory', 
    function($routeParams,$scope, $location, EventFactory){
      EventFactory.getOneEvent($routeParams.event_id)
      .success(function(data){
        $scope.event = data;
      });

    $scope.updateEvent = function(event_id) {
     EventFactory.updateEvent($routeParams.event_id)
     .success(function (data) {
        console.log(data);
        
     })
     .error(function (error){
        console.log(error);
     });
    };


  }]);