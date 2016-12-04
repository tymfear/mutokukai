'use strict';

(function () {
  angular.module('mutokukai', ['ui.router', 'pascalprecht.translate', 'ngCookies'])
    .config(['$translateProvider', '$compileProvider',
      function ($translateProvider, $compileProvider) {
        $translateProvider.useLoader('$translatePartialLoader', {
          urlTemplate: './app/translations/{lang}/{part}.json'
        });

        $translateProvider.preferredLanguage('ru-RU');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|chrome-extension|skype):/);
      }])
    .run(['$translate', '$cookies',
      function ($translate, $cookies) {
        setLanguage();

        function setLanguage() {
          var locale = $cookies.get('preferredLocale');

          if (locale) { $translate.use(locale) }
        }
      }]);
})();
