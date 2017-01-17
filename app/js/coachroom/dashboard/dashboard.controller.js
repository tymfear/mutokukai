(function(){
  'use strict';

  publicApp
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['cardService'];

  function DashboardController(cardService){
    var dashboard = this;

    cardService.getAllCards().then(
      function(response){
        dashboard.cards = response.data;
      },
      function(){

      }
    )
  }
})();
