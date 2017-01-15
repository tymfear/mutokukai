(function() {
  'use strict';

  coachRoomApp
    .config(['$stateProvider',
      function($stateProvider){
        $stateProvider
          .state('sign_in', {
            url: '/sign_in',
            templateUrl: 'app/js/coachroom/signIn/signIn.tmpl.html',
            controller: 'SignInController',
            controllerAs: 'signIn'
          })
      }]);
})();