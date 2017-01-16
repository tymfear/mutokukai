(function() {
  'use strict';

  coachRoomApp.service('authService', AuthService);

  AuthService.$injector = ['$http', 'apiUrl'];

  function AuthService($http, apiUrl) {
    var self = this;
    var userAuthorized;

    self.isAuthorized = function() {
      return userAuthorized;
    };

    self.signInUser = function() {
      userAuthorized = true;
    };

    self.signOutUser = function() {
      userAuthorized = null;
    };

    self.signIn = function(email, password) {
      var credentials = {
        email: email,
        password: password
      };

      return $http.post(apiUrl + '/public/login', credentials);
    }
  }
})();