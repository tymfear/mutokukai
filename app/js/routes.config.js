(function(){
  'use strict';
  
  angular.module('mutokukai')
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider){
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'app/templates/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
          })
          .state('aikido', {
            url: '/aikido',
            templateUrl: 'app/templates/aikido/aikido.html'
          })
          .state('mutokukai', {
            url: '/mutokukai',
            templateUrl: 'app/templates/mutokukai/mutokukai.html'
          })
          .state('about', {
            url: '/about',
            templateUrl: 'app/templates/about/about.html'
          })
          .state('contacts', {
            url: '/contacts',
            templateUrl: 'app/templates/contacts/contacts.html',
            controller: 'ContactsController',
            controllerAs: 'contacts'
          });

        $urlRouterProvider.otherwise('/');
      }]);
})();
