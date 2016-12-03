(function () {
  'use strict';

  angular.module('mutokukai')
    .component('arrows', {
      templateUrl: 'assets/js/common/arrows/arrows.html',
      controller: ArrowsController
    });

  ArrowsController.$inject = ['$interval'];

  function ArrowsController($interval) {
    var ctrl = this;

    $interval(higlightArrow, 1000);

    ctrl.currentArrow = 2;
    ctrl.nextArrow    = 0;

    function higlightArrow() {
      var arrows  = $('.arrow span');
      var currArr = arrows[ctrl.currentArrow];
      var nextArr = arrows[ctrl.nextArrow];

      $(currArr).removeClass("time-red");
      $(nextArr).addClass("time-red");

      ctrl.nextArrow    = ctrl.nextArrow < 2 ? (++ctrl.nextArrow) : 0;
      ctrl.currentArrow = ctrl.currentArrow < 2 ? (++ctrl.currentArrow) : 0;
    }
  }
})();