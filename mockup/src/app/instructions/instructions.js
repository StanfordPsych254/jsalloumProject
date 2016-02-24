(function () {

  'use strict';

  angular
    .module('app')
    .directive('instructions', instructions);

    function instructions() {
      return {
        restrict: 'E',
        templateUrl: 'instructions/instructions.html'
      };
    }

})();