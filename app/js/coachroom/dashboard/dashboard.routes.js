(function() {
  'use strict';

  coachRoomApp
    .config(['$stateProvider',
      function($stateProvider){
        $stateProvider
          .state('coachroom.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/js/coachroom/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
          })
      }]);
})();
