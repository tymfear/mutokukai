(function(){
  'use strict';

  angular.module('mutokukai', ['mutokukai.public', 'mutokukai.coachroom'])
    .config(['$sceDelegateProvider', function($sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://*.mutokukai.com.ua/**'
      ]);
    }]);

})();
