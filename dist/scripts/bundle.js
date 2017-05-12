(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _comet = require('./comet');

console.log((0, _comet.hello2)('yamada'));
console.log((0, _comet.hello)('yamada'));

},{"./comet":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hello = hello;
function hello(name) {
    return "Hello\u3001" + name + "!!!";
}

var hello2 = exports.hello2 = function hello2(name) {
    return "\u3053\u3093\u306B\u3061\u306F\u3001" + name + "!";
};

},{}]},{},[1])
//# sourceMappingURL=bundle.js.map