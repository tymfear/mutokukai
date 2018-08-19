(function() {
    'use strict';

    angular.module('mutokukai')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$translate', '$translatePartialLoader', '$interval'];

    function HomeController($translate, $translatePartialLoader) {
        var home = this;

        $translatePartialLoader.addPart('home');
        $translatePartialLoader.addPart('common');

        home.classesSchedule = [{
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
            },
            {
                place: 'Saltovka',
                transport: 'bus',
                schedule: {
                    1: '19:00',
                    3: '19:00',
                    5: '19:00'
                }
            },
            {
                place: 'Saltovka',
                transport: 'bus',
                schedule: {
                    1: '20:30',
                    3: '20:30',
                    5: '20:30'
                }
            },
        ];
    }
})();
