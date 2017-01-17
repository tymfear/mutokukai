(function() {
  'use strict';

  coachRoomApp.controller('SignInController', SignInController);

  SignInController.$injector = ['authService', '$state'];

  function SignInController(authService, $state) {
    var ctrl = this;

    ctrl.signIn = function() {
      authService.signIn(ctrl.login, ctrl.password)
        .then(
          function(response) {
            $state.go('coachroom.dashboard');
          },
          function(error) {
            console.log(error)
          })
    };
  }
})();
