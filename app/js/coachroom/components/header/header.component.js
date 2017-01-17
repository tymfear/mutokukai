(function(){
  'use strict';

  coachRoomApp
    .component('apiHeader', {
      templateUrl: 'app/js/coachroom/components/header/header.component.html',
      controller: ApiHeaderController
    });

  ApiHeaderController.$inject = ['authService', '$state'];

  function ApiHeaderController(authService, $state){
    var ctrl = this;

    ctrl.signOut = function(){
      authService.signOut().then(
        function(result){
          $state.go('sign_in')
        }
      ).catch(function(error) {
        console.log(error.data);
      })
    };
  }
})();
