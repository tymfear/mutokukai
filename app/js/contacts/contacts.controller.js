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
                ageCategory: 'Дорослі',
                address: 'м. Пушкінська',
                schedule: 'Пн, Ср, Пт: 6:30 - 8:15',
                instructorId: instructorIds.Anatoliy
            },
            {
                ageCategory: 'Дорослі',
                address: 'пр-т Героїв Харкова, 246-б, ДЮСШ №7',
                schedule: 'Пн, Пт: 07:00 - 08:30',
                instructorId: instructorIds.Anatoliy
            }
        ];

        contacts.getContacts = function() {
           return contacts.list.map(function(contact) {
                var instructor = instructors.getInstructor(contact.instructorId);
                return angular.extend(contact, instructor);
            });
        };
    }
})();
