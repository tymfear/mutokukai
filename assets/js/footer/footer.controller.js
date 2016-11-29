(function () {
  'use strict';

  angular.module('mutokukai')
    .controller('FooterController', FooterController);

  FooterController.$inject = ['$translate', '$translatePartialLoader'];

  function FooterController($translate, $translatePartialLoader) {
    var footer = this;

    $translatePartialLoader.addPart('footer');
    $translatePartialLoader.addPart('common');
    $translate.refresh();
  }
})();