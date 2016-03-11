(function () {

  'use strict';

  angular
    .module('app')
    .controller('ModalInstanceController', modalInstanceController);

    function modalInstanceController($scope, $uibModalInstance) {
      $scope.ok = function () {
        $uibModalInstance.dismiss();
      };
    }
})();