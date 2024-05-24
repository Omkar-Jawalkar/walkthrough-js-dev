(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["walkthrough-js-dev"] = {}));
})(this, (function (exports) { 'use strict';

    function sum(number1, number2) {
      return number1 + number2;
    }

    exports.sum = sum;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
