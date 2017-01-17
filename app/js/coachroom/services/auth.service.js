(function(){
  'use strict';

  coachRoomApp.service('authService', AuthService);

  AuthService.$injector = ['$http', 'apiUrl', '$q', '$window'];

  function AuthService($http, apiUrl, $q, $window){
    var self = this;
    var userInfo;

    function init(){
      if($window.sessionStorage["userInfo"]) {
        userInfo = JSON.parse($window.sessionStorage["userInfo"]);
      }
    }

    init();

    self.getUserInfo = function(){
      return userInfo;
    };

    self.signIn = function(login, password){
      var deferred = $q.defer();

      var credentials = {
        login: login,
        password: password
      };

      $http.post(apiUrl + '/public/login', credentials)
        .then(
          function(response){
            userInfo                           = { login: login };
            $window.sessionStorage['userInfo'] = JSON.stringify(userInfo);
            deferred.resolve(userInfo)
          },
          function(error){
            deferred.reject(error);
          }
        );

      return deferred.promise;
    };

    self.signOut = function(){
      var deferred = $q.defer();

      $http.get(apiUrl + '/public/logout')
        .then(
          function(result){
            $window.sessionStorage["userInfo"] = null;
            userInfo = null;
            deferred.resolve(result);
          },
          function(){
            deferred.reject(error);
          }
        );

      return deferred.promise;
    }
  }
})();
