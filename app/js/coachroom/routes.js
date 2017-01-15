(function() {
  'use strict';

  coachRoomApp
    .config(['$stateProvider',
      function($stateProvider){
        $stateProvider
          .state('coachroom', {
            url: '/api',
            abstract: true,
            template: '<ui-view></ui-view>',
            // resolve: {
            //   auth: ['authService', function(authService) {
            //
            //   } ]
            // }
          })
      }]);
})();