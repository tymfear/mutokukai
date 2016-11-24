'use strict';

(function(){
  angular.module('mutokukai')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function($stateProvider, $urlRouterProvider, $locationProvider){
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: './assets/js/home/home.html'
          })
          .state('aikido', {
            url: '/aikido',
            templateUrl: './assets/js/aikido/aikido.html'
          })
          .state('mutokukai', {
            url: '/mutokukai',
            templateUrl: './assets/js/mutokukai/mutokukai.html'
          })
          .state('about', {
            url: '/about',
            templateUrl: './assets/js/about/about.html'
          })
          .state('contacts', {
            url: '/contacts',
            templateUrl: './assets/js/contacts/contacts.html'
          });

        $locationProvider.html5Mode({enabled:true, requireBase: false});

        $urlRouterProvider.otherwise('/')
      }]);
})();
