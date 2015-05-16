"use strict";
angular.module('EventApp').controller('UserCtrl', ['$rootscope', '$scope', '$location', '$localStorage', 'UserFactory' function($rootscope, $scope, $location, $localStorage, UserFactory ){

   $scope.token = $localStorage.token;

    $scope.signUp = function() {
      var formData = {
        firstname: $scope.firstname,
        lastname: $scope.lastname,
        email: $scope.email,
        password: $scope.password
      };

      UserFactory.save(formData, function(res){
        if(res.type == false) {
          alert(res.data);
        }else{
          $localStorage.token = res.data.token;
          window.location = '/';
        }

      }, function() {
        $rootscope.error = 'failed to sign up';
      })
    };

    $scope.signIn = function() {
      var formData = {
          email: $scope.email,
          password: $scope.password
      };

      UserFactory.signIn(formData, function(res) {
          if (res.type == false) {
              alert(res.data);
          } else {
              $localStorage.token = res.data.token;
              window.location = "/";    
          }
      }, function() {
          $rootScope.error = 'Failed to sign in';
      })
  };

  $scope.logout = function() {
    Main.logout(function() {
        window.location = "/";
    }, function() {
        alert("Failed to logout!");
    });
  };

}]);