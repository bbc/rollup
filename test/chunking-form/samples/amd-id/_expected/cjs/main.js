'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getA() {
  return Promise.resolve().then(function () { return require('./generated-a.js'); });
}

exports.getA = getA;
