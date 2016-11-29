(function () {
  'use strict';

  angular.module('mutokukai')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$translate', '$translatePartialLoader'];

  function HomeController($translate, $translatePartialLoader) {
    var home = this;

    $translatePartialLoader.addPart('home');
    $translatePartialLoader.addPart('common');
    $translate.refresh();
  }
})();