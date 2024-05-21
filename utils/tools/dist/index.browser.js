var jsTools = (function (exports) {
  'use strict';

  function sub(a, b) {
    return a - b;
  }

  function sum(a, b) {
    return a + b;
  }

  function pow(a, b) {
    return Math.pow(a, b);
  }

  exports.pow = pow;
  exports.sub = sub;
  exports.sum = sum;

  return exports;

})({});
