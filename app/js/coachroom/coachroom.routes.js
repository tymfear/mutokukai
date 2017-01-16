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
              // auth: ['authService', '$q', function(authService, $q) {
              //   var deferred = $q.defer();
              //
              //   if(authService.isAuthorized()){
              //     deferred.resolve()
              //   } else {
              //     deferred.reject()
              //   }
              //
              //   return deferred.reject();
              // } ]
            }
          })
      }]);
})();