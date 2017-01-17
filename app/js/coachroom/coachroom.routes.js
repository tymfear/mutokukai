(function(){
  'use strict';

  coachRoomApp
    .config(['$stateProvider',
      function($stateProvider){
        $stateProvider
          .state('coachroom', {
            url: '/api',
            abstract: true,
            templateUrl: 'app/js/coachroom/coachroom.index.html',
            resolve: {
              auth: ['authService', '$q', function(authService, $q){
                var userInfo = authService.getUserInfo();

                if(userInfo) {
                  return $q.when(userInfo)
                } else {
                  return $q.reject({ authenticated: false })
                }
              }]
            }
          })
      }]);
})();
