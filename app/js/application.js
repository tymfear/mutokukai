(function(){
  'use strict';

  angular.module('mutokukai', ['ui.router', 'pascalprecht.translate', 'ngCookies'])
    .config(['$translateProvider', '$compileProvider', '$sceDelegateProvider',
      function($translateProvider, $compileProvider, $sceDelegateProvider){
        $translateProvider.useLoader('$translatePartialLoader', {
          urlTemplate: './app/translations/{lang}/{part}.json'
        });

        $sceDelegateProvider.resourceUrlWhitelist([
          'self',
          'http://*.mutokukai.com.ua/**'
        ]);
        $translateProvider.useSanitizeValueStrategy('escape');

        $translateProvider.preferredLanguage('ua-UA');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|chrome-extension|skype):/);
      }])
    .run(['$translate', '$cookies', '$translatePartialLoader', '$rootScope',
      function($translate, $cookies, $translatePartialLoader, $rootScope){
        setLanguage();
        $translatePartialLoader.addPart('common');
        $translate.refresh();

        $rootScope.$on('$translatePartialLoaderStructureChanged', function(){
          $translate.refresh();
        });

        function setLanguage(){
          var locale = $cookies.get('preferredLocale');

          if(locale) { $translate.use(locale); }
        }
      }]);
})();
