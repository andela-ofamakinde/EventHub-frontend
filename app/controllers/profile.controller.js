"use strict";

angular.module('EventApp')
  .controller('ProfileCtrl', ['$scope','$rootScope','UserFactory', '$route', 'EventFactory', 'UserEvents',
    function($scope, $rootScope, UserFactory, $route, EventFactory, UserEvents){
     // console.log(1, UserEvents);
      $rootScope.eventlist = UserEvents.data;

  }]);