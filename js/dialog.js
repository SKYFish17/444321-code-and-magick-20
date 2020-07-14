'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupOpenBtn = document.querySelector('.setup-open');
  var setupCloseBtn = setupWindow.querySelector('.setup-close');
  var setupUserName = setupWindow.querySelector('.setup-user-name');

  var openSetup = function () {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
  };

  var closeSetup = function () {
    setupWindow.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);

    window.move.resetSetupPosition();
  };

  var onSetupEscPress = function (evt) {
    if (evt.code === 'Escape' && evt.target !== setupUserName) {
      closeSetup();
    }
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
