"use strict";
angular.module('EventApp')
  .factory('UserFactory', ['$rootScope', '$http', '$localStorage', function($rootScope, $http, $localStorage) {
    // var BASE_URL = 'https://event-hub.herokuapp.com/';
    var BASE_URL = 'http://localhost:5000/';

    var token  = $localStorage.token;
    if(token){
      $rootScope.isloggedin =  true;
    }

    var ApiRequest = {
      signUp: function(user) {
        return $http.post(BASE_URL + 'signup', user);
      },
      signIn: function(user, success, error) {
        $http.post(BASE_URL + 'signin', user)
          .success(success)
          .error(error);
      },
      logOut: function(success) {
        changeUser({});
        delete $localStorage.token;
        success();
      },
      currentUser: function() {
        return getUserFromToken();
      }
    };

    function urlBase64Decode(str) {
      var output = str.replace('-', '+').replace('_', '/');
      switch (output.length % 4) {
        case 0:
          break;
        case 2:
          output += '==';
          break;
        case 3:
          output += '=';
          break;
        default:
          throw 'Illegal base64url string!';
      }
      return window.atob(output);
    }

    function getUserFromToken() {
      var token = $localStorage.token;
      var user = {};
      if (typeof token !== 'undefined') {
          var encoded = token.split('.')[1];
          user = JSON.parse(urlBase64Decode(encoded));
      }
      return user;
    }

    function changeUser(user) {
      angular.extend(ApiRequest.currentUser, user);
    }
    return ApiRequest;

  }]);
