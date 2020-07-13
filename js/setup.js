'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupSimilar = setupWindow.querySelector('.setup-similar');

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

  window.data.createWizardsList();
  setupSimilar.classList.remove('hidden');

  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  fireball.addEventListener('click', onFireballClick);
})();
