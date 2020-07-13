'use strict';

(function () {
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

  window.colorize = changeWizardElementColor;
})();
