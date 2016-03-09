(function () {

  'use strict';

  angular
    .module('app')
    .directive('debriefing', debriefing);

    function debriefing() {
      return {
        restrict: 'E',
        templateUrl: 'app/debriefing/debriefing.html'
      };
    }

})();