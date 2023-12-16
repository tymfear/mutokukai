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
        ];
    }
})();
