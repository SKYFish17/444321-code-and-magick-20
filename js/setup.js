'use strict';

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

var WizardsFullData = [];

var setupWindow = document.querySelector('.setup');
var setupSimilar = setupWindow.querySelector('.setup-similar');
var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
var fragment = document.createDocumentFragment();

var getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getFullName = function (names, surnames) {
  var fullName = names[getRandomNumber(0, names.length - 1)] + ' ' + surnames[getRandomNumber(0, surnames.length - 1)];
  return fullName;
};

var getCoatColor = function (coatsColors) {
  return coatsColors[getRandomNumber(0, coatsColors.length - 1)];
};

var getEyeColor = function (eyesColors) {
  return eyesColors[getRandomNumber(0, eyesColors.length - 1)];
};

var getWizardsData = function (names, surnames, coatsColors, eyesColors) {
  var heroes = [];

  for (var i = 0; i < 4; i++) {
    heroes[i] = {};
    heroes[i].name = getFullName(names, surnames);
    heroes[i].coatColor = getCoatColor(coatsColors);
    heroes[i].eyesColor = getEyeColor(eyesColors);
  }

  return heroes;
};

var createWizardItem = function (index) {
  var newWizard = similarWizardTemplate.cloneNode(true);
  var newWizardName = newWizard.querySelector('.setup-similar-label');
  var newWizardAppearance = newWizard.querySelector('.setup-similar-wizard');
  var newWizardCoat = newWizardAppearance.querySelector('.wizard-coat');
  var newWizardEyes = newWizardAppearance.querySelector('.wizard-eyes');

  newWizardName.textContent = WizardsFullData[index].name;
  newWizardCoat.style.fill = WizardsFullData[index].coatColor;
  newWizardEyes.style.fill = WizardsFullData[index].eyesColor;

  return newWizard;
};

var createWizardsList = function () {
  for (var i = 0; i < WizardsFullData.length; i++) {
    fragment.appendChild(createWizardItem(i));
  }
  setupSimilarList.appendChild(fragment);
  setupSimilar.classList.remove('hidden');
};

WizardsFullData = getWizardsData(wizardsNames, wizardsSurnames, wizardsCoatsColors, wizardsEyesColors);
createWizardsList();

setupSimilar.classList.remove('hidden');
setupWindow.classList.remove('hidden');
