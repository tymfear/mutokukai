(function () {
  'use strict';

  angular.module('mutokukai')
    .component('headerNavigation', {
      templateUrl: 'app/templates/common/header/header.html',
      controller: HeaderController
    });

  HeaderController.$inject = ['$translate', '$translatePartialLoader', '$cookies'];

  function HeaderController($translate, $translatePartialLoader, $cookies) {
    var ctrl = this;

    ctrl.currentLocale = $translate.use;

    $translatePartialLoader.addPart('nav');
    $translatePartialLoader.addPart('common');
    $translate.refresh();

    ctrl.changeLocale = function (locale) {
      $translate.use(locale);
      $cookies.put('preferredLocale', locale);
    };
  }
})();
