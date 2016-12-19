(function(){
  'use strict';

  angular.module('mutokukai')
    .component('nearestClassSchedule', {
      templateUrl: 'app/templates/common/nearestClassSchedule/nearest.class.schedule.html',
      controller: NearestClassSchedule,
      bindings: {
        nearest: '<'
      }
    });

  NearestClassSchedule.$inject = ['$translate', '$translatePartialLoader', 'nearestDateFilter', 'daysOfWeek', 'dateByDayFilter'];

  function NearestClassSchedule($translate, $translatePartialLoader, nearestDate, daysOfWeek, dateByDay){
    var ctrl = this;

    ctrl.closestClass     = nearestDate(ctrl.nearest.schedule);
    ctrl.closestClassDay  = daysOfWeek[ctrl.closestClass.day];
    ctrl.closestClassTime = ctrl.closestClass.time;
    ctrl.closestClassDate = dateByDay(ctrl.closestClassDay);
    
    $translatePartialLoader.addPart('footer');
    $translatePartialLoader.addPart('common');
    $translate.refresh();

  }
})();
