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
        password: password,
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
      };

      $http.post(apiUrl + '/public/login', credentials)
        .then(
          function(response){
            userInfo                           = response.data;
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

      $http.post(apiUrl + '/public/logout')
        .then(
          function(result){
            $window.sessionStorage["userInfo"] = null;
            userInfo = null;
            deferred.resolve(result);
          },
          function(error){
            deferred.reject(error);
          }
        );

      return deferred.promise;
    }
  }
})();
