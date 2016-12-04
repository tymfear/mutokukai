(function () {
  'use strict';

  angular.module('mutokukai')
    .controller('NavController', NavController);

  NavController.$inject = ['$translate', '$translatePartialLoader', '$cookies'];

  function NavController($translate, $translatePartialLoader, $cookies) {
    var nav = this;

    nav.currentLocale = $translate.use;

    $translatePartialLoader.addPart('nav');
    $translatePartialLoader.addPart('common');
    $translate.refresh();

    nav.changeLocale = function (locale) {
      $translate.use(locale);
      $cookies.put('preferredLocale', locale);
    };
  }
})();