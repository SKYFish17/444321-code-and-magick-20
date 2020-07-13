'use strict';

(function () {
  var WIZARDS_MUMBER = 4;

  var wizardsNames = [
    'Иван',
    'Хуан',
    'Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var wizardsSurnames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var wizardsCoatsColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var wizardsEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var wizardFireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizardsFullData = [];

  var generateWizardsData = function () {
    for (var i = 0; i < WIZARDS_MUMBER; i++) {
      wizardsFullData[i] = {};
      wizardsFullData[i].name = window.util.getFullName(wizardsNames, wizardsSurnames);
      wizardsFullData[i].coatColor = window.util.getRandomValue(wizardsCoatsColors);
      wizardsFullData[i].eyesColor = window.util.getRandomValue(wizardsEyesColors);
    }
  };

  window.data = {
    generateWizardsData: generateWizardsData,
    wizardsData: wizardsFullData,
    wizardsCoatsColors: wizardsCoatsColors,
    wizardsEyesColors: wizardsEyesColors,
    wizardFireballColors: wizardFireballColors
  };
})();
