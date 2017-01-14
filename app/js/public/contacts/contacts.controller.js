(function () {
  'use strict';

  publicApp
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['InstructorsService'];

  function ContactsController(instructors) {
    var contacts = this;

    contacts.list = [
      {
        ageCategory: 'Взрослые',
        address: 'м. Пушкинская',
        schedule: 'Пн, Ср, Пт, Сб: 6:30 - 8:15',
        instructorId: 1
      },
      {
        ageCategory: 'Взрослые/Дети',
        address: 'м. Университет, ул. Сумская, 39, Дворец детского и юношеского творчества',
        schedule: 'Вт, Чт: 18:30 - 19:30',
        instructorId: 1
      },
      {
        ageCategory: 'Взрослые/Дети',
        address: 'м. Спортивная, ул.Лебединская 3',
        schedule: 'Пн, Ср, Пт: 17:00 - 18:00',
        instructorId: 2
      },
      {
        ageCategory: 'Взрослые/Дети',
        address: 'пгт. Песочин, административное здание завода "НАДИЯ"',
        schedule: 'Вт, Чт: 19:00 - 20:30, Сб: 10:00 - 11:30',
        instructorId: 2
      },
      {
        ageCategory: 'Дети',
        address: 'м.Научная, ул.Космическая 23, фитнесклуб "FitLine"',
        schedule: 'Пн, Ср, Пт: 18:00 - 19:00',
        instructorId: 3
      }
    ];

    contacts.getContacts = function () {
      var result = [];
      
      angular.forEach(contacts.list, function (contact) {
        var instructor = instructors.getInstructor(contact.instructorId);
        result.push(angular.extend(contact, instructor));
      });

      return result;
    };
  }
})();
