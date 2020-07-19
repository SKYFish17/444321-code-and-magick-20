'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupForm = setupWindow.querySelector('.setup-wizard-form');
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

  setupForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(setupForm), closeSetup, onError);
    evt.preventDefault();
  });

  window.dialog = {
    onError: onError
  };
})();
