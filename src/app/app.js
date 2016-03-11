(function () {

  'use strict';

  angular
    .module('app', ['ngAudio', 'ui.bootstrap'])
    .controller('AppController', appController);

    function appController($scope, ProjectInfo, ngAudio, $uibModal) {
      /*
       * Directive that's currently being displayed. Didn't feel like using ng-view or doing any routing
       */
      $scope.active = 'instructions';

      $scope.speakers = _.shuffle(ProjectInfo.speakers);
      $scope.numSpeakers = ProjectInfo.numSpeakers;
      $scope.speakerNumber = 0;
      $scope.scale = ProjectInfo.scale;
      $scope.randomSpeakerSample = _.shuffle(ProjectInfo.allSpeakers).slice(0, ProjectInfo.instructionsSampleSize);

      /*
       * Start button clicked on the instructions screen. Hides the instructions directive and shows the form directive.
       */
      $scope.start = function() {
        $scope.active = 'form';
        initializeQuestions();
      };

      $scope.submit = function() {
        if (!$scope.sound.paused) {
          if ($scope.questionGroup === $scope.questionGroups.length - 1) { // On the last question group for current speaker
            getCurrentSpeaker().behaviorScore = scoreQuestions() / $scope.questions.length;
            $scope.sound.stop();
            if ($scope.speakerNumber === $scope.numSpeakers - 1) {  // On the last speaker
              $scope.active = 'finished';
              submitData();
              return;
            }
            $scope.speakerNumber++;
            initializeQuestions();
          } else {
            $scope.questionGroup++;
          }
        } else {
          $uibModal.open({
            animate: true,
            size: 'sm',
            templateUrl: 'app/modal/modal.html',
            controller: 'ModalInstanceController'
          })
        }
      };

      function initializeQuestions() {
        $scope.questions = _.map(ProjectInfo.questions, _.clone);
        $scope.questionGroups = _.chunk(_.shuffle($scope.questions), ProjectInfo.questionsPerPage);
        $scope.questionGroup = 0;
        $scope.sound = ngAudio.load('assets/audio/' + getCurrentSpeaker().voicefil);
        $scope.sound.loop = true;
      }

      /*
       * Returns the current speaker
       */
      function getCurrentSpeaker() {
        return $scope.speakers[$scope.speakerNumber];
      }

      function scoreQuestions() {
        return _.sumBy($scope.questions, function(e) {
          return e.highRank ? e.score : $scope.scale.length + 1 - e.score;
        });
      }

      function submitData() {
        setTimeout(function() {
          turk.submit($scope.speakers);
        }, 1500);
      }
    }
})();
