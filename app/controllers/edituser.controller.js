"use strict";
angular.module('EventApp')
  .controller('EditProfCtrl', ['$scope', '$location', 'UserFactory', '$timeout',
    function($scope, $location, UserFactory, $timeout){

        $scope.currentUser = UserFactory.currentUser();

        $scope.updateUser = function() {
        UserFactory.updateUser($scope.currentUser)
        .success(function(data){
          console.log($scope.currentUser);
          $location.path('/profile');
        })
        .error(function(error){
          console.log(error);
        });
      };
    }]);