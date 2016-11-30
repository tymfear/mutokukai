'use strict';

(function () {
  angular.module('mutokukai', ['ui.router', 'pascalprecht.translate'])
    .config(['$translateProvider', '$compileProvider',
      function ($translateProvider, $compileProvider) {
        $translateProvider.useLoader('$translatePartialLoader', {
          urlTemplate: './assets/translations/{lang}/{part}.json'
        });

        $translateProvider.preferredLanguage('ru-RU');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|skype):/);
      }]);
})();
