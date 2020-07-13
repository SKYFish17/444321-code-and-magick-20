'use strict';

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

var setupWindow = document.querySelector('.setup');
var setupSimilar = setupWindow.querySelector('.setup-similar');
var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');

var combineWizardsData = function () {
  for (var i = 0; i < WIZARDS_MUMBER; i++) {
    wizardsFullData[i] = {};
    wizardsFullData[i].name = window.util.getFullName(wizardsNames, wizardsSurnames);
    wizardsFullData[i].coatColor = window.util.getRandomValue(wizardsCoatsColors);
    wizardsFullData[i].eyesColor = window.util.getRandomValue(wizardsEyesColors);
  }
};

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

var createWizardsList = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsFullData.length; i++) {
    fragment.appendChild(createWizardItem(i));
  }
  setupSimilarList.appendChild(fragment);
};

combineWizardsData();
createWizardsList();
setupSimilar.classList.remove('hidden');

var setupOpenBtn = document.querySelector('.setup-open');
var setupCloseBtn = setupWindow.querySelector('.setup-close');
var setupUserName = setupWindow.querySelector('.setup-user-name');

var wizardCoat = setupWindow.querySelector('.wizard-coat');
var inputCoatColor = setupWindow.querySelector('input[name="coat-color"]');

var wizardEyes = setupWindow.querySelector('.wizard-eyes');
var inputEyesColor = setupWindow.querySelector('input[name="eyes-color"]');

var fireball = setupWindow.querySelector('.setup-fireball-wrap');
var inputFireballColor = setupWindow.querySelector('input[name="fireball-color"]');

var onSetupEscPress = function (evt) {
  if (evt.code === 'Escape' && evt.target !== setupUserName) {
    closeSetup();
  }
};

var changeWizardElementColor = function (element, input, elementColors) {
  var randomColor = window.util.getRandomValue(elementColors);

  switch (element.tagName) {
    case 'use':
      element.style.fill = randomColor;
      break;
    case 'DIV':
      element.style.backgroundColor = randomColor;
      break;
  }
  input.value = randomColor;
};

var onWizardCoatClick = function () {
  changeWizardElementColor(wizardCoat, inputCoatColor, wizardsCoatsColors);
};

var onWizardEyesClick = function () {
  changeWizardElementColor(wizardEyes, inputEyesColor, wizardsEyesColors);
};

var onFireballClick = function () {
  changeWizardElementColor(fireball, inputFireballColor, wizardFireballColors);
};

var openSetup = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onSetupEscPress);
  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  fireball.addEventListener('click', onFireballClick);
};

var closeSetup = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);
  wizardCoat.removeEventListener('click', onWizardCoatClick);
  wizardEyes.removeEventListener('click', onWizardEyesClick);
  fireball.removeEventListener('click', onFireballClick);
};

setupOpenBtn.addEventListener('click', function () {
  openSetup();
});

setupOpenBtn.addEventListener('keydown', function (evt) {
  if (evt.code === 'Enter') {
    openSetup();
  }
});

setupCloseBtn.addEventListener('click', function () {
  closeSetup();
});

setupCloseBtn.addEventListener('keydown', function (evt) {
  if (evt.code === 'Enter') {
    closeSetup();
  }
});
