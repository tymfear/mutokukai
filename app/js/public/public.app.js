publicApp = angular.module('mutokukai.public', ['ui.router', 'pascalprecht.translate', 'ngCookies']);

(function() {
  'use strict';

  publicApp
    .config(['$translateProvider', '$compileProvider',
      function($translateProvider, $compileProvider) {
        $translateProvider.useLoader('$translatePartialLoader', {
          urlTemplate: './app/translations/{lang}/{part}.json'
        });

        $translateProvider.useSanitizeValueStrategy('escape');

        $translateProvider.preferredLanguage('ru-RU');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|chrome-extension|skype):/);
      }])
    .run(['$translate', '$cookies', '$translatePartialLoader', '$rootScope',
      function($translate, $cookies, $translatePartialLoader, $rootScope) {
        setLanguage();
        $translatePartialLoader.addPart('common');
        $translate.refresh();

        $rootScope.$on('$translatePartialLoaderStructureChanged', function() {
          $translate.refresh();
        });

        function setLanguage() {
          var locale = $cookies.get('preferredLocale');

          if (locale) { $translate.use(locale); }
        }
      }]);
})();
