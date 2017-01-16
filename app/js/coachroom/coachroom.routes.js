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
            resolve: {
              auth: ['authService', '$q', function(authService, $q) {
                if(authService.isAuthorized()){
                 return $q.when()
                } else {
                  return $q.reject()
                }
              } ]
            }
          })
      }]);
})();