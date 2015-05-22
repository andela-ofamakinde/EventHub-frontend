"use strict";

angular.module('EventApp')
  .controller('UserCtrl', ['$rootScope', '$scope', '$location', 'UserFactory', '$localStorage', '$route', 'EventFactory', '$mdToast', 
    function($rootScope, $scope, $location, UserFactory, $localStorage, $route, EventFactory, $mdToast){

      $scope.currentUser = UserFactory.currentUser();

      $scope.signUp = function() {
        UserFactory.signUp($scope.user).then(function(res) {
          console.log(res.data);
          $localStorage.token = res.data.token;
          if(res.data.token){
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
        UserFactory.signIn($scope.user)
        .success(function (data) {
          $localStorage.token = data.token;
            if(data.token){
              $scope.currentUser = UserFactory.currentUser();
               console.log($scope.currentUser);
              $rootScope.isloggedin =  true;
              $location.path('/profile');
            } else{
              $location.path('/signin');
            }
        })
        .error(function (error) {
          console.log(error);
        });
      };
      
      $scope.token = $localStorage.token;

      $scope.logOut = function() {
        $scope.currentUser = UserFactory.currentUser();
        $location.path('/home');
        UserFactory.logOut(function(){
          $rootScope.isloggedin =  false;
        }, function() {
        });
      };
}]);