(function(){
  'use strict';

  publicApp
    .filter('nearestDate', NearestDateFilter);

  NearestDateFilter.$inject = [];

  function NearestDateFilter(){
    return function(schedule){
      if(!schedule) { return; }

      var today  = moment().day(),
          result = {};


      for(var day in schedule) {
        if(day == today) {
          var startHour = schedule[day].split(':')[0];

          if(startHour > moment().hours()) {
            result.day  = day;
            result.time = schedule[day];
            break;
          }
        } else if(day > today) {
          result.day  = day;
          result.time = schedule[day];
          break;
        } else {
          for(var i = 0; i <= day; i++){
            if(schedule[i]) {
              result.day  = i;
              result.time = schedule[i];
            }
          }
        }
      }

      return result;
    };
  }
})();

