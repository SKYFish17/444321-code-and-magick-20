'use strict';

var setupWindow = document.querySelector('.setup');
var setupSimilar = setupWindow.querySelector('.setup-similar');
var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');

//  создаёт нового персонажа
var createWizardItem = function (index) {
  var newWizard = similarWizardTemplate.cloneNode(true);
  var newWizardName = newWizard.querySelector('.setup-similar-label');
  var newWizardAppearance = newWizard.querySelector('.setup-similar-wizard');
  var newWizardCoat = newWizardAppearance.querySelector('.wizard-coat');
  var newWizardEyes = newWizardAppearance.querySelector('.wizard-eyes');

  newWizardName.textContent = window.data.wizardsData[index].name;
  newWizardCoat.style.fill = window.data.wizardsData[index].coatColor;
  newWizardEyes.style.fill = window.data.wizardsData[index].eyesColor;

  return newWizard;
};

//  создаёт список похожих персонажей и вставляет в разметку
var createWizardsList = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < window.data.wizardsData.length; i++) {
    fragment.appendChild(createWizardItem(i));
  }
  setupSimilarList.appendChild(fragment);
};

window.data.generateWizardsData();
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
  changeWizardElementColor(wizardCoat, inputCoatColor, window.data.wizardsCoatsColors);
};

var onWizardEyesClick = function () {
  changeWizardElementColor(wizardEyes, inputEyesColor, window.data.wizardsEyesColors);
};

var onFireballClick = function () {
  changeWizardElementColor(fireball, inputFireballColor, window.data.wizardFireballColors);
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
