(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    /src/js/Controller.js
    Handles anything to do with the user interaction
 */

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.shortName = 'ui';
  }

  _createClass(Controller, [{
    key: 'setDependents',
    value: function setDependents(dependents) {
      for (var i = 0; i < dependents.length; i++) {
        this[dependents[i].shortName] = dependents[i];
      }
    }
  }]);

  return Controller;
}();

exports.default = Controller;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    /src/js/Model.js
    Load and manipulate data model
 */

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);

    this.shortName = 'model';
  }

  _createClass(Model, [{
    key: 'setDependents',
    value: function setDependents(dependents) {
      for (var i = 0; i < dependents.length; i++) {
        this[dependents[i].shortName] = dependents[i];
      }
    }
  }]);

  return Model;
}();

exports.default = Model;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    /src/js/View.js
    Handles everything to do with loading/parsing/displaying/logging or rendering
 */

var View = function () {
  function View() {
    _classCallCheck(this, View);

    this.shortName = 'view';
  }

  _createClass(View, [{
    key: 'setDependents',
    value: function setDependents(dependents) {
      for (var i = 0; i < dependents.length; i++) {
        this[dependents[i].shortName] = dependents[i];
      }
    }
  }]);

  return View;
}();

exports.default = View;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Model = require('./Model');

var _Model2 = _interopRequireDefault(_Model);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _Controller = require('./Controller');

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                             src/js/main.js
                                                                                                                                                             Main entry point for the Application
                                                                                                                                                           */

var App = function App() {
  _classCallCheck(this, App);

  // Instantiate MVC Classes
  // See http://stackoverflow.com/questions/43838136/instantiate-and-use-2-or-more-javascript-es6-classes

  this.m = new _Model2.default();
  this.v = new _View2.default();
  this.c = new _Controller2.default();

  // Create an array of instantiated classes and Set Dependents
  var dependents = [this.m, this.v, this.c];
  this.m.setDependents(dependents);
  this.v.setDependents(dependents);
  this.c.setDependents(dependents);
};

exports.default = App;


new App();

},{"./Controller":1,"./Model":2,"./View":3}]},{},[4]);
