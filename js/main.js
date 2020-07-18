'use strict';

(function () {
  var onLoad = function (data) {
    console.log(data);
  };

  var onError = function (message) {
    console.error(message);
  };

  window.backend.load(onLoad, onError);
})();
