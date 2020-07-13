'use strict';

(function () {
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

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > maxElement) {
        maxElement = arr[j];
      }
    }
    return maxElement;
  };

  window.util = {
    getRandomNumber: getRandomNumber,
    getFullName: getFullName,
    getRandomValue: getRandomValue,
    getMaxElement: getMaxElement
  };

})();
