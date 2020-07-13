'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupSimilar = setupWindow.querySelector('.setup-similar');

  window.data.createWizardsList();
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

  var onWizardCoatClick = function () {
    window.colorize(wizardCoat, inputCoatColor, window.data.wizardsCoatsColors);
  };

  var onWizardEyesClick = function () {
    window.colorize(wizardEyes, inputEyesColor, window.data.wizardsEyesColors);
  };

  var onFireballClick = function () {
    window.colorize(fireball, inputFireballColor, window.data.wizardFireballColors);
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
})();
