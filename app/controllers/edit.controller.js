"use strict";
angular.module('EventApp')
  .controller('EditCtrl', ['$routeParams', '$scope', '$location','EventFactory', 
    function($routeParams,$scope, $location, EventFactory){
      EventFactory.getOneEvent($routeParams.event_id)
      .success(function(data){
        data.startdate = new Date(data.startdate);
        data.enddate = new Date(data.enddate);
        $scope.event = data;
      });

      $scope.updateEvent = function(event_id, event) {
       EventFactory.updateEvent($routeParams.event_id, event)
       .success(function (data) {

       })
       .error(function (error){

       });
      };
  }]);