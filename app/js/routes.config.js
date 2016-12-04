'use strict';

(function(){
  angular.module('mutokukai')
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider){
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'app/js/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
          })
          .state('aikido', {
            url: '/aikido',
            templateUrl: 'app/js/aikido/aikido.html'
          })
          .state('mutokukai', {
            url: '/mutokukai',
            templateUrl: 'app/js/mutokukai/mutokukai.html'
          })
          .state('about', {
            url: '/about',
            templateUrl: 'app/js/about/about.html'
          })
          .state('contacts', {
            url: '/contacts',
            templateUrl: 'app/js/contacts/contacts.html',
            controller: 'ContactsController',
            controllerAs: 'contacts'
          });

        $urlRouterProvider.otherwise('/')
      }]);
})();
