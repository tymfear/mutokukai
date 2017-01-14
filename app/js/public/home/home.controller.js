(function(){
  'use strict';

  publicApp
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$translate', '$translatePartialLoader', '$interval'];

  function HomeController($translate, $translatePartialLoader, $interval){
    var home = this;

    $translatePartialLoader.addPart('home');
    $translatePartialLoader.addPart('common');

    home.classesSchedule = [
      {
        place: 'Pushkinskaya',
        transport: 'train',
        schedule: {
          1: '6:30',
          3: '6:30',
          5: '6:30',
          6: '6:30'
        }
      },
      {
        place: 'Sportivnaya',
        transport: 'train',
        schedule: {
          1: '17:00',
          3: '17:00',
          5: '17:00'
        }
      },
      {
        place: 'University',
        transport: 'train',
        schedule: {
          2: '18:30',
          4: '18:30'
        }
      },
      {
        place: 'Nauchnaya',
        transport: 'train',
        schedule: {
          1: '18:00',
          3: '18:00',
          5: '18:00'
        }
      },
      {
        place: 'Pesochin',
        transport: 'bus',
        schedule: {
          2: '19:00',
          4: '19:00',
          6: '10:00'
        }
      }
    ];
  }
})();
