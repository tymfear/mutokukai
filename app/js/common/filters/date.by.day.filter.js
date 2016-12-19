(function(){
  'use strict';

  angular.module('mutokukai')
    .filter('dateByDay', DateByDayFilter);

  DateByDayFilter.$inject = [];

  function DateByDayFilter(){
    return function(day){
      var dayNumber;

      switch(day) {
        case 'Sunday':
          dayNumber = 0;
          break; 
        case 'Monday':
          dayNumber = 1;
          break;
        case 'Tuesday':
          dayNumber = 2;
          break;
        case 'Wednesday':
          dayNumber = 3;
          break;
        case 'Thursday':
          dayNumber = 4;
          break;
        case 'Friday':
          dayNumber = 5;
          break;
        case 'Saturday':
          dayNumber = 6;
          break;
      }

      return moment(moment().startOf('week')
        .add(dayNumber, 'days')).format('DD-MM-YYYY');
    };
  }
})();

