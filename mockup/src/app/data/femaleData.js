(function () {

  'use strict';

  angular
    .module('app')
    .factory('FemaleData', femaleData);

    function femaleData() {
      var data = [
        {
          'id': 1,
          'voice': 154,
          'voicefil': 'f154_power.wav',
          'plev': 1,
          'pitch_smeanMD': 36.80909606,
          'intense_smeanMD': 2.231806477,
          'form_smeanMD': 5.44609162
        },
        {
          'id': 2,
          'voice': 167,
          'voicefil': 'f167_power.wav',
          'plev': -1,
          'pitch_smeanMD': 5.818983822,
          'intense_smeanMD': 3.008391088,
          'form_smeanMD': -36.88477854
        },
        {
          'id': 3,
          'voice': 144,
          'voicefil': 'f144_power.wav',
          'plev': -1,
          'pitch_smeanMD': 23.83980288,
          'intense_smeanMD': -0.804354214,
          'form_smeanMD': 22.01659668
        },
        {
          'id': 4,
          'voice': 178,
          'voicefil': 'f178_power.wav',
          'plev': -1,
          'pitch_smeanMD': 40.01124794,
          'intense_smeanMD': 0.382486843,
          'form_smeanMD': -7.015490781
        },
        {
          'id': 5,
          'voice': 165,
          'voicefil': 'f165_power.wav',
          'plev': 1,
          'pitch_smeanMD': 40.29790105,
          'intense_smeanMD': -6.096255932,
          'form_smeanMD': 3.775443863
        },
        {
          'id': 6,
          'voice': 163,
          'voicefil': 'f163_power.wav',
          'plev': -1,
          'pitch_smeanMD': 37.90443796,
          'intense_smeanMD': 1.511616015,
          'form_smeanMD': -13.46252917
        },
        {
          'id': 7,
          'voice': 131,
          'voicefil': 'f131_power.wav',
          'plev': -1,
          'pitch_smeanMD': 17.03243323,
          'intense_smeanMD': -0.682695417,
          'form_smeanMD': -38.85985939
        },
        {
          'id': 8,
          'voice': 114,
          'voicefil': 'f114_power.wav',
          'plev': 1,
          'pitch_smeanMD': 29.87535774,
          'intense_smeanMD': -2.404029852,
          'form_smeanMD': -31.07975873
        },
        {
          'id': 9,
          'voice': 170,
          'voicefil': 'f170_power.wav',
          'plev': 1,
          'pitch_smeanMD': 54.36738872,
          'intense_smeanMD': -4.539434162,
          'form_smeanMD': -9.841547373
        },
        {
          'id': 10,
          'voice': 119,
          'voicefil': 'f119_power.wav',
          'plev': 1,
          'pitch_smeanMD': 33.83185305,
          'intense_smeanMD': -1.431068645,
          'form_smeanMD': -33.51323633
        },
        {
          'id': 11,
          'voice': 136,
          'voicefil': 'f136_power.wav',
          'plev': -1,
          'pitch_smeanMD': 60.02990112,
          'intense_smeanMD': 3.720723061,
          'form_smeanMD': -5.347838759
        },
        {
          'id': 12,
          'voice': 155,
          'voicefil': 'f155_power.wav',
          'plev': -1,
          'pitch_smeanMD': 9.819287762,
          'intense_smeanMD': -3.059724842,
          'form_smeanMD': 61.20300292
        },
        {
          'id': 13,
          'voice': 140,
          'voicefil': 'f140_power.wav',
          'plev': 1,
          'pitch_smeanMD': 40.7412398,
          'intense_smeanMD': -2.990620419,
          'form_smeanMD': 37.38493591
        },
        {
          'id': 14,
          'voice': 177,
          'voicefil': 'f177_power.wav',
          'plev': 1,
          'pitch_smeanMD': 57.52598445,
          'intense_smeanMD': -6.863572396,
          'form_smeanMD': -17.09294241
        },
        {
          'id': 15,
          'voice': 139,
          'voicefil': 'f139_power.wav',
          'plev': -1,
          'pitch_smeanMD': 63.25923701,
          'intense_smeanMD': 5.928626273,
          'form_smeanMD': -12.47712932
        },
        {
          'id': 16,
          'voice': 161,
          'voicefil': 'f161_power.wav',
          'plev': -1,
          'pitch_smeanMD': 52.75432303,
          'intense_smeanMD': -2.554627166,
          'form_smeanMD': -27.15949349
        },
        {
          'id': 17,
          'voice': 174,
          'voicefil': 'f174_power.wav',
          'plev': -1,
          'pitch_smeanMD': 37.16066576,
          'intense_smeanMD': 2.197876721,
          'form_smeanMD': -43.49894056
        },
        {
          'id': 18,
          'voice': 145,
          'voicefil': 'f145_power.wav',
          'plev': -1,
          'pitch_smeanMD': 62.04123773,
          'intense_smeanMD': 3.213311583,
          'form_smeanMD': 29.19987783
        },
        {
          'id': 19,
          'voice': 111,
          'voicefil': 'f111_power.wav',
          'plev': 1,
          'pitch_smeanMD': 43.2096304,
          'intense_smeanMD': 0.042278973,
          'form_smeanMD': 51.97347238
        },
        {
          'id': 20,
          'voice': 148,
          'voicefil': 'f148_power.wav',
          'plev': -1,
          'pitch_smeanMD': 70.2403293,
          'intense_smeanMD': 1.262640151,
          'form_smeanMD': -25.11126833
        },
        {
          'id': 21,
          'voice': 116,
          'voicefil': 'f116_power.wav',
          'plev': -1,
          'pitch_smeanMD': 57.00054512,
          'intense_smeanMD': 2.2935455,
          'form_smeanMD': 38.38236379
        },
        {
          'id': 22,
          'voice': 130,
          'voicefil': 'f130_power.wav',
          'plev': 1,
          'pitch_smeanMD': 58.85639946,
          'intense_smeanMD': 2.368446936,
          'form_smeanMD': 36.65703917
        },
        {
          'id': 23,
          'voice': 126,
          'voicefil': 'f126_power.wav',
          'plev': 1,
          'pitch_smeanMD': 56.38350429,
          'intense_smeanMD': 3.742799732,
          'form_smeanMD': -42.70427889
        },
        {
          'id': 24,
          'voice': 146,
          'voicefil': 'f146_power.wav',
          'plev': 1,
          'pitch_smeanMD': 60.14507323,
          'intense_smeanMD': -2.51907108,
          'form_smeanMD': 63.33106666
        },
        {
          'id': 25,
          'voice': 105,
          'voicefil': 'f105_power.wav',
          'plev': 1,
          'pitch_smeanMD': 12.04294003,
          'intense_smeanMD': 1.25963436,
          'form_smeanMD': 155.6235982
        },
        {
          'id': 26,
          'voice': 125,
          'voicefil': 'f125_power.wav',
          'plev': 1,
          'pitch_smeanMD': 20.60497469,
          'intense_smeanMD': 1.235431493,
          'form_smeanMD': 180.6128624
        },
        {
          'id': 27,
          'voice': 128,
          'voicefil': 'f128_power.wav',
          'plev': -1,
          'pitch_smeanMD': 21.11817451,
          'intense_smeanMD': -7.855017941,
          'form_smeanMD': 200.2487623
        },
        {
          'id': 28,
          'voice': 110,
          'voicefil': 'f110_power.wav',
          'plev': 1,
          'pitch_smeanMD': 51.46281732,
          'intense_smeanMD': 5.306230905,
          'form_smeanMD': 182.3075518
        },
        {
          'id': 29,
          'voice': 104,
          'voicefil': 'f104_power.wav',
          'plev': -1,
          'pitch_smeanMD': 53.20115577,
          'intense_smeanMD': 1.701664905,
          'form_smeanMD': 211.3108303
        },
        {
          'id': 30,
          'voice': 180,
          'voicefil': 'f180_power.wav',
          'plev': 1,
          'pitch_smeanMD': 'NA',
          'intense_smeanMD': 'NA',
          'form_smeanMD': 'NA'
        }
      ];

      return {
        data: _.map(data, function(e) {
          return {
            speakerId: e.voice,
            voicefil: e.voicefil,
            plev: e.plev,
            sex: 1
          };
        })
      };
    }

})();
