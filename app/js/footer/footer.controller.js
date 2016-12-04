(function () {
  'use strict';

  angular.module('mutokukai')
    .controller('FooterController', FooterController);

  FooterController.$inject = ['$translate', '$translatePartialLoader', '$filter'];

  function FooterController($translate, $translatePartialLoader, $filter) {
    var footer = this;

    $translatePartialLoader.addPart('footer');
    $translatePartialLoader.addPart('common');
    $translate.refresh();
    
    footer.currentYear = function(){
      return $filter('date')(new Date(), 'yyyy');
    }
  }
})();
