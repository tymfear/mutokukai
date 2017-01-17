coachRoomApp = angular.module('mutokukai.coachroom', ['ui.router']);

(function(){
  'use strict';

  coachRoomApp
    .run(["$rootScope", "$state", function($rootScope, $state){
      $rootScope.$on("$stateChangeError", function(event, current, previous, eventObj, from, error){
        if(error.authenticated === false) {
          $state.go("sign_in");
        }
      });
    }])
    .config(['$httpProvider', function($httpProvider){
      $httpProvider.defaults.withCredentials = true;
    }]);
})();
