(function() {
  'use strict';

  coachRoomApp.controller('SignInController', SignInController);

  SignInController.$injector = ['authService'];

  function SignInController(authService) {
    var ctrl = this;

    ctrl.signIn = function() {
      authService.signIn(ctrl.email, ctrl.password)
        .then(function(response) {
        self.test = response.data;
      })
    };
  }
})();