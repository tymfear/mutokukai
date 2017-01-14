(function () {
  'use strict';

  publicApp
    .component('banner', {
    templateUrl: 'app/templates/common/banner/banner.html',
    controller: BannerController
  });

  BannerController.$inject = ['$translate', '$translatePartialLoader'];

  function BannerController($translate, $translatePartialLoader) {
    var ctrl = this;

    $translatePartialLoader.addPart('banner');
  }
})();
