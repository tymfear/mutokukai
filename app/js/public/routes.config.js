(function(){
  'use strict';
  
  publicApp
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider){
        $stateProvider

          .state('public', {
            abstract: true,
            templateUrl: 'app/js/public/public.index.html'
          })
          .state('public.home', {
            url: '/home',
            templateUrl: 'app/templates/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
          })
          .state('public.aikido', {
            url: '/aikido',
            templateUrl: 'app/templates/aikido/aikido.html'
          })
          .state('public.mutokukai', {
            url: '/mutokukai',
            templateUrl: 'app/templates/mutokukai/mutokukai.html'
          })
          .state('public.about', {
            url: '/about',
            templateUrl: 'app/templates/about/about.html'
          })
          .state('public.contacts', {
            url: '/contacts',
            templateUrl: 'app/templates/contacts/contacts.html',
            controller: 'ContactsController',
            controllerAs: 'contacts'
          });

        $urlRouterProvider.otherwise('/home');
      }]);
})();
