(function () {
  'use strict';

  angular.module('mutokukai')
    .controller('NavController', NavController);

  NavController.$inject = ['$translate', '$translatePartialLoader'];

  function NavController($translate, $translatePartialLoader) {
    var nav = this;

    nav.currentLocale = $translate.use;

    $translatePartialLoader.addPart('nav');
    $translatePartialLoader.addPart('common');
    $translate.refresh();

    nav.changeLocale = function (locale) {
      $translate.use(locale)
    };
  }
})();