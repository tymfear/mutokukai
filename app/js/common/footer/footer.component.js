(function () {
  'use strict';

  angular.module('mutokukai')
    .component('siteFooter', {
      templateUrl: 'app/templates/common/footer/footer.html',
      controller: FooterController
    });

  FooterController.$inject = ['$translate', '$translatePartialLoader', '$filter'];

  function FooterController($translate, $translatePartialLoader, $filter) {
    var ctrl = this;

    $translatePartialLoader.addPart('footer');
    $translatePartialLoader.addPart('common');

    ctrl.currentYear = function(){
      return $filter('date')(new Date(), 'yyyy');
    };
  }
})();
