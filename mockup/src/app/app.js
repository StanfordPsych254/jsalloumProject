(function () {

  'use strict';

  angular
    .module('app', [])
    .controller('AppController', appController);

    function appController($scope, ProjectInfo) {
      $scope.speakerNumber = 0;
      $scope.scale = ProjectInfo.scale;

      initializeQuestions();

      $scope.submit = function() {
        if ($scope.questionGroup === $scope.questionGroups.length - 1) {
          scoreQuestions();
          initializeQuestions();
        } else {
          $scope.questionGroup++;
        }
      };

      function initializeQuestions() {
        var copy = _.map(ProjectInfo.questions, _.clone);
        $scope.questions = _.shuffle(copy);
        $scope.questionGroups = _.chunk($scope.questions, ProjectInfo.questionsPerPage);
        $scope.questionGroup = 0;
        $scope.speakerNumber++;
      }

      function scoreQuestions() {
        var score = _.sumBy($scope.questions, function(e) {
          return e.highRank ? e.score : $scope.scale.length + 1 - e.score;
        });
      }
    }
})();
