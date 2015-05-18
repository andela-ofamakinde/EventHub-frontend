"use strict";

angular.module('EventApp')
  .controller('UserCtrl', ['$rootScope', '$scope', '$location', 'UserFactory', '$localStorage', '$route', 
    function($rootScope, $scope, $location, UserFactory, $localStorage, $route){

      $scope.toggle = false;

      $scope.currentUser = UserFactory.currentUser;
      console.log($scope.currentUser);

      $scope.signUp = function() {
        $scope.toggle = true;
        UserFactory.signUp($scope.user, function(data) {
          console.log(data);
          $localStorage.token = data.token;
          $location.path('/events');
          $scope.$apply();
        }, function(err) {
          console.log(err);
        });
      };

      $scope.signIn = function(){
        $scope.toggle = true;
        UserFactory.signIn($scope.user, function(data) {
          console.log(data);
          $localStorage.token = data.token;
          $location.path('/events');
        },function(err) {
          console.log(err);
        });
      };

      $scope.token = $localStorage.token;

      $scope.logOut = function() {
        $location.path('/home');
        UserFactory.logOut(function(){
          console.log('Yay');
        }, function() {
          console.log('err');
        });
      };
}]);