coachRoomApp = angular.module('mutokukai.coachroom', ['ui.router']);

(function() {
  'use strict';

  coachRoomApp.run(["$rootScope", "$state", function($rootScope, $state) {
    $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
        $state.go("sign_in");
    });
  }]);
})();
