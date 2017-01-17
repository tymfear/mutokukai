(function(){
  'use strict';

  coachRoomApp.config(InterceptorsConfig);

  InterceptorsConfig.$injector = ['$httpProvider'];

  function InterceptorsConfig($httpProvider){
    $httpProvider.interceptors.push(Interceptors);

    Interceptors.$injector = ['$q', '$injector'];
    function Interceptors($q, $injector){
      return {
        request: function(config){
          return config;
        },

        response: function(response){
          return response;
        },

        responseError: function(rejection){
          switch(rejection.status) {
            case 404:
              $injector.get('$state').transitionTo('coachroom.dashboard');
              break;
            case 401:
              $injector.get('$state').transitionTo('sign_in');
              break;
          }

          return $q.reject(rejection);
        }
      }
    }
  }
})();
