"use strict";

angular.module('EventApp')
  .controller('UserCtrl', ['$rootScope', '$scope', '$location', 'UserFactory', '$localStorage', '$route', 'EventFactory',
    function($rootScope, $scope, $location, UserFactory, $localStorage, $route, EventFactory){

      // $rootScope.isloggedin = false;
      $scope.currentUser = UserFactory.currentUser;

      $scope.signUp = function() {
        $rootScope.isloggedin =  true;
        UserFactory.signUp($scope.user).then(function(res) {
          console.log(res.data);
          $localStorage.token = resp.data.token;
          // $rootScope.isloggedin =  true;
          if(resp.data.token){
            $location.path('/events');
          }else{
            $location.path('/signup');
          }
        }, function(err) {

        });
      };

      $scope.signIn = function(){
        $rootScope.isloggedin =  true;
        UserFactory.signIn($scope.user, function(data) {
          $location.path('/profile');
          console.log(data);
          $localStorage.token = data.token;
        }, function(err) {
          console.log(err);
        });
      };

      $scope.getEvent = function() {
        var eve = [];
        $scope.events = $scope.currentUser.eventsCreated;
        console.log($scope.events.length);
        for (var i = 0; i < $scope.events.length; i++) {
          EventFactory.getOneEvent($scope.events[i], function(data) {
            eve.push(data);
          }, function(err){
            console.log(err);
          });
        }

        $scope.events = eve;
      };

      // $scope.joinEvent = function(){
      //   var  evnt = [];
      //   $scope.joinevent = $scope.currentUser.eventsJoined;

      //   EventFactory.joinevent($scope.joinevent, function(data) {
      //     evnt.push(data);
      //   }, function(err) {
      //     console.log(err);
      //   });
      // };


      $scope.token = $localStorage.token;

      $scope.logOut = function() {
        // $rootScope.isloggedin =  false;
        $location.path('/home');
        UserFactory.logOut(function(){
        }, function() {
          // console.log(err);
        });
      };
}]);