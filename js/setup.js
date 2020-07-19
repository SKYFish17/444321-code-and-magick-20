'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupSimilar = setupWindow.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');

  var wizardCoat = setupWindow.querySelector('.wizard-coat');
  var inputCoatColor = setupWindow.querySelector('input[name="coat-color"]');

  var wizardEyes = setupWindow.querySelector('.wizard-eyes');
  var inputEyesColor = setupWindow.querySelector('input[name="eyes-color"]');

  var fireball = setupWindow.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setupWindow.querySelector('input[name="fireball-color"]');

  var onWizardCoatClick = function () {
    window.colorize(wizardCoat, inputCoatColor, window.data.wizardsCoatsColors);
  };

  var onWizardEyesClick = function () {
    window.colorize(wizardEyes, inputEyesColor, window.data.wizardsEyesColors);
  };

  var onFireballClick = function () {
    window.colorize(fireball, inputFireballColor, window.data.wizardFireballColors);
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var createWizardItem = function (wizard) {
    var newWizard = similarWizardTemplate.cloneNode(true);
    var newWizardName = newWizard.querySelector('.setup-similar-label');
    var newWizardAppearance = newWizard.querySelector('.setup-similar-wizard');
    var newWizardCoat = newWizardAppearance.querySelector('.wizard-coat');
    var newWizardEyes = newWizardAppearance.querySelector('.wizard-eyes');

    newWizardName.textContent = wizard.name;
    newWizardCoat.style.fill = wizard.colorCoat;
    newWizardEyes.style.fill = wizard.colorEyes;

    return newWizard;
  };

  var onLoad = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.data.WIZARDS_MAX_NUMBER; i++) {
      fragment.appendChild(createWizardItem(wizards[i]));
    }
    setupSimilarList.appendChild(fragment);
  };

  window.backend.load(onLoad, onError);
  setupSimilar.classList.remove('hidden');

  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  fireball.addEventListener('click', onFireballClick);
})();
