"use strict";
angular.module('EventApp')
  .controller('EventCtrl', ['$scope', 'EventFactory', function($scope, EventFactory){
    EventFactory.getEvents()
    .success(function(data){
      $scope.data = data;
    })
    .error(function(err){
    });
  }]);