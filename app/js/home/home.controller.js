(function () {
  'use strict';

  angular.module('mutokukai')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$translate', '$translatePartialLoader', '$interval'];

  function HomeController($translate, $translatePartialLoader, $interval) {
    var home = this;

    $translatePartialLoader.addPart('home');
    $translatePartialLoader.addPart('common');
    $translate.refresh();

  }
})();