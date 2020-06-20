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

var wizardsFullData = [];

var setupWindow = document.querySelector('.setup');
var setupSimilar = setupWindow.querySelector('.setup-similar');
var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');

var getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getFullName = function (names, surnames) {
  var fullName = names[getRandomNumber(0, names.length - 1)] + ' ' + surnames[getRandomNumber(0, surnames.length - 1)];
  return fullName;
};

var getRandomValue = function (arr) {
  return arr[getRandomNumber(0, arr.length - 1)];
};

var combineWizardsData = function () {
  for (var i = 0; i < WIZARDS_MUMBER; i++) {
    wizardsFullData[i] = {};
    wizardsFullData[i].name = getFullName(wizardsNames, wizardsSurnames);
    wizardsFullData[i].coatColor = getRandomValue(wizardsCoatsColors);
    wizardsFullData[i].eyesColor = getRandomValue(wizardsEyesColors);
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

//  новый код - задание 4
var setupOpenBtn = document.querySelector('.setup-open');
var setupCloseBtn = setupWindow.querySelector('.setup-close');
var setupUserName = setupWindow.querySelector('.setup-user-name');
var isSetupUserNameFocus = false;

var setUserNameFocusIn = function () {
  isSetupUserNameFocus = true;
};

var setUserNameFocusOut = function () {
  isSetupUserNameFocus = false;
};

var setUserNameFocusStatus = function () {
  setupUserName.addEventListener('focusin', setUserNameFocusIn);
  setupUserName.addEventListener('focusout', setUserNameFocusOut);
};

var unsetUserNameFocusStatus = function () {
  setupUserName.removeEventListener('focusin', setUserNameFocusIn);
  setupUserName.removeEventListener('focusout', setUserNameFocusOut);
};

var onSetupEscPress = function (evt) {
  if (evt.code === 'Escape' && !isSetupUserNameFocus) {
    evt.preventDefault();
    closeSetup();
  }
};

var openSetup = function () {
  setupWindow.classList.remove('hidden');
  setUserNameFocusStatus();
  document.addEventListener('keydown', onSetupEscPress);
};

var closeSetup = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);
  unsetUserNameFocusStatus();
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
