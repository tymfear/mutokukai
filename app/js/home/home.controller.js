(function() {
    'use strict';

    angular.module('mutokukai')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$translate', '$translatePartialLoader', '$interval'];

    function HomeController($translate, $translatePartialLoader) {
        var home = this;
        var bus = "bus";
        var train = "train";
        
        $translatePartialLoader.addPart('home');
        $translatePartialLoader.addPart('common');

        home.classesSchedule = [{
                place: 'Maselskoho',
                transport: train,
                schedule: {
                    2: '07:00',
                    5: '07:00',
                }
            },
                                {
                place: 'Merefa',
                transport: bus,
                schedule: {
                    1: '14:15',
                    3: '14:15',
                    5: '14:15',  
                }
            },
                                 {
                place: 'Merefa',
                transport: bus,
                schedule: {
                    1: '15:30',
                    3: '15:30',
                    5: '15:30',  
                }
            },
                                 {
                place: 'Merefa',
                transport: bus,
                schedule: {
                    1: '17:00',
                    3: '17:00',
                    5: '17:00',  
                }
            },
        ];
    }
})();
