"use strict";

angular.module('EventApp')
  .controller('ProfileCtrl', ['$scope','$rootScope','UserFactory', '$route', 'EventFactory', 'UserEvents', 'JoinEvents',
    function($scope, $rootScope, UserFactory, $route, EventFactory, UserEvents, JoinEvents){
      $scope.currentUser = UserFactory.currentUser();
      $rootScope.eventlist = UserEvents.data;
      $scope.joinedevent = JoinEvents.data;
  }]);