(function () {
  'use strict';

  angular.module('mutokukai')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['InstructorsService'];

  function ContactsController(instructors) {
    var contacts = this;

    contacts.list = [
      {
        subway: 'м. Пушкинская',
        ageCategory: 'Взрослые',
        address: 'ул. Пушкинская, 79',
        schedule: 'Пн, Ср, Пт, Сб: 6:30 - 8:15',
        instructorId: 1
      },
      {
        subway: 'м. Университет',
        ageCategory: 'Взрослые/Дети',
        address: 'ул. Сумская, 39, Дворец детского и юношеского творчеств',
        schedule: 'Вт, Чт: 18:30 - 19:30',
        instructorId: 1
      }
    ];

    contacts.getContacts = function () {
      var result = [];
      
      angular.forEach(contacts.list, function (contact) {
        var instructor = instructors.getInstructor(contact.instructorId);
        result.push(angular.extend(contact, instructor))
      });

      return result;
    }
  }
})();