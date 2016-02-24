(function () {

  'use strict';

  angular
    .module('app', [])
    .controller('AppController', appController);

    function appController($scope, ProjectInfo) {
      $scope.active = {
        instructions: true,
        form: false
      };

      $scope.speakerNumber = 0;
      $scope.scale = ProjectInfo.scale;

      initializeQuestions();

      $scope.submit = function() {
        if ($scope.questionGroup === $scope.questionGroups.length - 1) {
          //scoreQuestions();
          invertScores();
          console.log($scope.questions);
          initializeQuestions();
        } else {
          $scope.questionGroup++;
        }
      };

      $scope.start = function() {
        $scope.active.instructions = false;
        $scope.active.form = true;
      };

      function initializeQuestions() {
        $scope.questions = _.map(ProjectInfo.questions, _.clone);
        $scope.questionGroups = _.chunk(_.shuffle($scope.questions), ProjectInfo.questionsPerPage);
        $scope.questionGroup = 0;
        $scope.speakerNumber++;
      }

      /*
       * Low rank-questions are reverse scored, so their scores need to be inverted
       */
      function invertScores() {
        _.each($scope.questions, function(e) {
          e.score = e.highRank ? e.score : $scope.scale.length + 1 - e.score;
        });
      }

      function scoreQuestions() {
        var score = _.sumBy($scope.questions, function(e) {
          return e.highRank ? e.score : $scope.scale.length + 1 - e.score;
        });
      }
    }
})();
