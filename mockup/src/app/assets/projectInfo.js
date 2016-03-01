(function () {

  'use strict';

  angular
    .module('app')
    .factory('ProjectInfo', projectInfo);

    function projectInfo(MaleData, FemaleData) {
      var maleData = MaleData.data;
      var femaleData = FemaleData.data;
      var numSpeakersPerSex = 1;

      var highRankQuestions = [
        'How likely is it that this person is in a position to reward others?',
        'How focused do you imagine this person to be?',
        'How effective do you imagine this person is at getting people to pay attention?',
        'Do you imagine this person as someone who frequently interrupts others?',
        'How demanding do you imagine this person to be?',
        'Do you imagine this person as someone who expects to have his/her way with things?'
      ];

      var lowRankQuestions = [
        'Do you imagine this person as someone who works well in groups?',
        'How good at following instructions do you imagine this person to be?',
        'Do you imagine this person as someone who is attentive to the needs of others?',
        'How uncomfortable at making direct eye contact do you imagine this person to be?',
        'Do you imagine this person as someone who has trouble speaking his/her mind?',
        'Do you imagine this person as someone who is easily swayed by others?'
      ];

      var scale = _.map(Array(7), function(e, i) {
        e = { index: i + 1 };
        if (i === 0) { e.anchor = 'not at all'; }
        if (i === 6) { e.anchor = 'very much'; }
        return e;
      });

      function labelQuestions(questions, label) {
        return questions.map(function(e) { return { question: e, highRank: label }; });
      }

      var allSpeakers = _.concat(maleData, femaleData);
      var speakers = _.concat(maleData.slice(0, numSpeakersPerSex), femaleData.slice(0, numSpeakersPerSex));

      return {
        questions: _.concat(labelQuestions(highRankQuestions, true), labelQuestions(lowRankQuestions, false)),
        scale: scale,
        questionsPerPage: 4,
        speakers: speakers,
        numSpeakers: speakers.length,
        allSpeakers: allSpeakers,
        instructionsSampleSize: 10
      };
    }

})();