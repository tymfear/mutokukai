(function () {
  'use strict';
  
  angular.module('mutokukai', ['ui.router', 'pascalprecht.translate', 'ngCookies'])
    .config(['$translateProvider', '$compileProvider', '$sceDelegateProvider',
      function ($translateProvider, $compileProvider, $sceDelegateProvider) {
        $translateProvider.useLoader('$translatePartialLoader', {
          urlTemplate: './app/translations/{lang}/{part}.json'
        });

        $sceDelegateProvider.resourceUrlWhitelist([
          // Allow same origin resource loads.
          'self',
          'http://*.mutokukai.com.ua/**'
        ]);
        $translateProvider.useSanitizeValueStrategy('escape');

        $translateProvider.preferredLanguage('ru-RU');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|chrome-extension|skype):/);
      }])
    .run(['$translate', '$cookies', '$translatePartialLoader',
      function ($translate, $cookies, $translatePartialLoader) {
        setLanguage();
        $translatePartialLoader.addPart('common');
        $translate.refresh();

        function setLanguage() {
          var locale = $cookies.get('preferredLocale');

          if (locale) { $translate.use(locale); }
        }
      }]);
})();
