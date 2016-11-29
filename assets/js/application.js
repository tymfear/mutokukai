'use strict';

(function () {
  angular.module('mutokukai', ['ui.router', 'pascalprecht.translate'])
    .config(function ($translateProvider, $translatePartialLoaderProvider) {
      $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: './assets/translations/{lang}/{part}.json'
      });

      $translateProvider.preferredLanguage('ru-RU');
    });
})();
