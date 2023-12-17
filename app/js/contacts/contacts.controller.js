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
{
                ageCategory: 'Діти',
                address: ' м. Мерефа, вул. Дніпровська, 226 ( будівля Укртелекому 3 поверх )',
                schedule: 'Пн, Ср, Пт: 14:15 - 15:15',
                instructorId: instructorIds.Anatoliy
            }
        {
                ageCategory: 'Підлітки',
                address: 'м. Мерефа, вул. Дніпровська, 226 ( будівля Укртелекому 3 поверх )',
                schedule: 'Пн, Ср, Пт: 15:30 - 16:45',
                instructorId: instructorIds.Anatoliy
            }
        {
                ageCategory: 'Дорослі',
                address: 'м. Мерефа, вул. Дніпровська, 226 ( будівля Укртелекому 3 поверх )',
                schedule: 'Пн, Ср, Пт: 17:00 - 18:15',
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
