(function(){
  'use strict';

  coachRoomApp.service('cardService', CardService);

  CardService.$injector = ['$http', 'apiUrl'];

  function CardService($http, apiUrl){
    var self = this;

    self.getAllCards = function(){
      return $http.get(apiUrl + '/api/cards');
    }

  }
})();
