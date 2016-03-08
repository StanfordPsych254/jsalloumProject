(function () {

  'use strict';

  angular
    .module('app')
    .directive('projectForm', form);

    function form() {
      return {
        restrict: 'E',
        templateUrl: 'app/form/form.html'
      };
    }

})();
