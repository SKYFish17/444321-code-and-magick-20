'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var dialogHandle = setupWindow.querySelector('.upload');

  var defaultCoords = {
    x: (document.body.clientWidth / 2) + 'px',
    y: 80 + 'px'
  };

  var resetSetupPosition = function () {
    setupWindow.style.top = defaultCoords.y;
    setupWindow.style.left = defaultCoords.x;
  };

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';
      setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.move = {
    resetSetupPosition: resetSetupPosition
  };
})();
