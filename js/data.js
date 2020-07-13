'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupSimilar = setupWindow.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');

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

  // генерация массива с данными персонажей
  var generateWizardsData = function () {
    for (var i = 0; i < WIZARDS_MUMBER; i++) {
      wizardsFullData[i] = {};
      wizardsFullData[i].name = window.util.getFullName(wizardsNames, wizardsSurnames);
      wizardsFullData[i].coatColor = window.util.getRandomValue(wizardsCoatsColors);
      wizardsFullData[i].eyesColor = window.util.getRandomValue(wizardsEyesColors);
    }
  };

  //  создаёт нового персонажа
  var createWizardItem = function (index) {
    var newWizard = similarWizardTemplate.cloneNode(true);
    var newWizardName = newWizard.querySelector('.setup-similar-label');
    var newWizardAppearance = newWizard.querySelector('.setup-similar-wizard');
    var newWizardCoat = newWizardAppearance.querySelector('.wizard-coat');
    var newWizardEyes = newWizardAppearance.querySelector('.wizard-eyes');

    newWizardName.textContent = wizardsFullData[index].name;
    newWizardCoat.style.fill = wizardsFullData[index].coatColor;
    newWizardEyes.style.fill = wizardsFullData[index].eyesColor;

    return newWizard;
  };

  //  создаёт список похожих персонажей и вставляет в разметку
  var createWizardsList = function () {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsFullData.length; i++) {
      fragment.appendChild(createWizardItem(i));
    }
    setupSimilarList.appendChild(fragment);
  };

  window.data = {
    createWizardsList: createWizardsList,
    wizardsCoatsColors: wizardsCoatsColors,
    wizardsEyesColors: wizardsEyesColors,
    wizardFireballColors: wizardFireballColors
  };
})();
