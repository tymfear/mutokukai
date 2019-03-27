(function() {
    'use strict';

    angular.module('mutokukai')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['InstructorsService'];

    function ContactsController(instructors) {
        var contacts = this;
        var instructorIds = {
            Tymur: 1,
            Andrew: 2,
            Nikolay: 3,
            Anatoliy: 4
        };

        contacts.list = [{
                ageCategory: 'Взрослые',
                address: 'м. Пушкинская',
                schedule: 'Пн, Ср, Пт, Сб: 6:30 - 8:15',
                instructorId: instructorIds.Anatoliy
            },
            {
                ageCategory: 'Взрослые/Дети',
                address: 'м. Спортивная, ул.Лебединская 3',
                schedule: 'Пн, Ср, Пт: 17:00 - 18:00',
                instructorId: instructorIds.Andrew
            },
            {
                ageCategory: 'Взрослые/Дети',
                address: 'пгт. Песочин, административное здание завода "НАДИЯ"',
                schedule: 'Вт, Чт: 19:00 - 20:30, Сб: 10:00 - 11:30',
                instructorId: instructorIds.Andrew
            },
            {
                ageCategory: 'Дети',
                address: 'м.Научная, ул.Космическая 23, фитнесклуб "FitLine"',
                schedule: 'Пн, Ср, Пт: 18:00 - 19:00',
                instructorId: instructorIds.Nikolay
            },
            {
                ageCategory: 'Дети',
                address: 'ул. Салтовское Шоссе, 147 А, Спорт Школа',
                schedule: 'Пн, Ср, Пт: 19:00 - 20:15',
                instructorId: instructorIds.Anatoliy
            },
            {
                ageCategory: 'Взрослые',
                address: 'ул. Салтовское Шоссе, 147 А, Спорт Школа',
                schedule: 'Пн, Ср, Пт: 20:30 - 21:45',
                instructorId: instructorIds.Anatoliy
            }
        ];

        contacts.getContacts = function() {
            var result = [];

            angular.forEach(contacts.list, function(contact) {
                var instructor = instructors.getInstructor(contact.instructorId);
                result.push(angular.extend(contact, instructor));
            });

            return result;
        };
    }
})();