(function () {

  'use strict';

  angular
    .module('app')
    .directive('instructions', instructions);

    function instructions() {
      return {
        restrict: 'E',
        templateUrl: 'app/instructions/instructions.html',
        controller: ['$scope', function($scope) {
          $scope.activeInstructions = 'instructions';

          $scope.setActive = function(active) {
            $scope.activeInstructions = active;
          };
        }]
      };
    }

})();
