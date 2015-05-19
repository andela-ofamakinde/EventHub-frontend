"use strict";

angular.module('EventApp')
  .controller('UserCtrl', ['$rootScope', '$scope', '$location', 'UserFactory', '$localStorage', '$route', 'EventFactory',
    function($rootScope, $scope, $location, UserFactory, $localStorage, $route, EventFactory){

      // $rootScope.isloggedin = false;

      $scope.signUp = function() {
        UserFactory.signUp($scope.user).then(function(res) {
          console.log(res.data);
          $localStorage.token = resp.data.token;
          if(resp.data.token){
            $scope.currentUser = UserFactory.currentUser();
            $rootScope.isloggedin =  true;
            $location.path('/events');
          }else{
            $location.path('/signup');
          }
        }, function(err) {

        });
      };

      $scope.signIn = function(){
        UserFactory.signIn($scope.user, 
          function(data) {
            $localStorage.token = data.token;
            if(data.token){
              $rootScope.currentUser = UserFactory.currentUser();
              console.log(UserFactory.currentUser());
              $rootScope.isloggedin =  true;
              $location.path('/profile');
            }else{
              $location.path('/signin');
            }
          }, 
          function(err) {
        });
      };

      $scope.getEvent = function() {
        var eve = [];
        $scope.events = $rootScope.currentUser.eventsCreated;
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