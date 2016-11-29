(function () {
  'use strict';

  angular.module('mutokukai')
    .controller('BannerController', BannerController);

  BannerController.$inject = ['$translate', '$translatePartialLoader'];

  function BannerController($translate, $translatePartialLoader) {
    var banner = this;

    $translatePartialLoader.addPart('banner');
    $translate.refresh();
  }
})();