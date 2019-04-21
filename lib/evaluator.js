(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("evaluator", [], factory);
	else if(typeof exports === 'object')
		exports["evaluator"] = factory();
	else
		root["evaluator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash.round/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.round/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Creates a function like `_.round`.
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding.
 * @returns {Function} Returns the new round function.
 */
function createRound(methodName) {
  var func = Math[methodName];
  return function(number, precision) {
    number = toNumber(number);
    precision = nativeMin(toInteger(precision), 292);
    if (precision) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      var pair = (toString(number) + 'e').split('e'),
          value = func(pair[0] + 'e' + (+pair[1] + precision));

      pair = (toString(value) + 'e').split('e');
      return +(pair[0] + 'e' + (+pair[1] - precision));
    }
    return func(number);
  };
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Computes `number` rounded to `precision`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round.
 * @param {number} [precision=0] The precision to round to.
 * @returns {number} Returns the rounded number.
 * @example
 *
 * _.round(4.006);
 * // => 4
 *
 * _.round(4.006, 2);
 * // => 4.01
 *
 * _.round(4060, -2);
 * // => 4100
 */
var round = createRound('round');

module.exports = round;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constant = function Constant(name, value) {
  _classCallCheck(this, Constant);

  this.name = name;
  this.value = value;
};

exports.default = Constant;
module.exports = exports["default"];

/***/ }),

/***/ "./src/evaluator.js":
/*!**************************!*\
  !*** ./src/evaluator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.round */ "./node_modules/lodash.round/index.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./src/constant.js"));

var _operator = _interopRequireDefault(__webpack_require__(/*! ./operator */ "./src/operator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Evaluator =
/*#__PURE__*/
function () {
  function Evaluator() {
    _classCallCheck(this, Evaluator);

    this.symbols = {
      '^': {
        infix: 'EXP'
      },
      '*': {
        infix: 'MUL'
      },
      '/': {
        infix: 'DIV'
      },
      '%': {
        infix: 'MOD'
      },
      '+': {
        infix: 'ADD',
        prefix: 'POS'
      },
      '-': {
        infix: 'SUB',
        prefix: 'NEG'
      }
    };
    this.operators = {
      'EXP': new _operator.default('EXP', 4, 'right', function (a, b) {
        return Math.pow(a, b);
      }),
      'POS': new _operator.default('POS', 3, 'right', function (a) {
        return a;
      }),
      'NEG': new _operator.default('NEG', 3, 'right', function (a) {
        return -a;
      }),
      'MUL': new _operator.default('MUL', 2, 'left', function (a, b) {
        return a * b;
      }),
      'DIV': new _operator.default('DIV', 2, 'left', function (a, b) {
        return a / b;
      }),
      'MOD': new _operator.default('MOD', 2, 'left', function (a, b) {
        return a % b;
      }),
      'ADD': new _operator.default('ADD', 1, 'left', function (a, b) {
        return a + b;
      }),
      'SUB': new _operator.default('SUB', 1, 'left', function (a, b) {
        return a - b;
      })
    };
    this.constants = {
      'E': new _constant.default('E', Math.E),
      'PI': new _constant.default('PI', Math.PI)
    };
    this.numbers = /(\d+\.\d*)|(\d*\.\d+)|(\d+)/;
    this.openParenthesis = '(';
    this.closeParenthesis = ')';
    this.whitespace = /\s/;
  }

  _createClass(Evaluator, [{
    key: "isSymbol",
    value: function isSymbol(token) {
      return Object.prototype.hasOwnProperty.call(this.symbols, token);
    }
  }, {
    key: "isOperator",
    value: function isOperator(token) {
      return Object.prototype.hasOwnProperty.call(this.operators, token);
    }
  }, {
    key: "isConstant",
    value: function isConstant(token) {
      return Object.prototype.hasOwnProperty.call(this.constants, token);
    }
  }, {
    key: "isNumber",
    value: function isNumber(token) {
      return this.numbers.test(token);
    }
  }, {
    key: "isOpenParenthesis",
    value: function isOpenParenthesis(token) {
      return token === this.openParenthesis;
    }
  }, {
    key: "isCloseParenthesis",
    value: function isCloseParenthesis(token) {
      return token === this.closeParenthesis;
    }
  }, {
    key: "isWhitespace",
    value: function isWhitespace(token) {
      return this.whitespace.test(token);
    }
  }, {
    key: "topOperatorHasPrecedence",
    value: function topOperatorHasPrecedence(operatorStack, currentOperator) {
      if (!operatorStack.length) return false;
      var topToken = operatorStack[operatorStack.length - 1];
      if (!this.isOperator(topToken)) return false;
      var topOperator = this.operators[topToken];
      if (currentOperator.method.length === 1 && topOperator.method.length > 1) return false;
      return topOperator.hasGreaterPrecedence(currentOperator) || topOperator.hasEqualPrecedence(currentOperator) && topOperator.isLeftAssociative();
    }
  }, {
    key: "determineOperator",
    value: function determineOperator(token, previousToken) {
      var notation;

      if (previousToken === undefined || this.isOpenParenthesis(previousToken) || this.isSymbol(previousToken)) {
        notation = 'prefix';
      } else if (this.isCloseParenthesis(previousToken) || this.isNumber(previousToken) || this.isConstant(previousToken)) {
        notation = 'infix';
      }

      return this.operators[this.symbols[token][notation]];
    }
  }, {
    key: "parse",
    value: function parse(string) {
      var _this = this;

      if (!string.length) {
        throw Error('No input');
      }

      var pattern = /(\d+\.\d*)|(\d*\.\d+)|(\d+)|([a-zA-Z]+)|(.)/g;
      var infixExpression = (string.match(pattern) || []).filter(function (token) {
        return !_this.isWhitespace(token);
      }).map(function (token) {
        return token.toUpperCase();
      });
      return infixExpression;
    }
  }, {
    key: "convert",
    value: function convert(infixExpression) {
      var _this2 = this;

      if (!infixExpression.length) {
        throw Error('No valid tokens');
      }

      var operatorStack = [];
      var postfixExpression = [];
      infixExpression.forEach(function (token, index) {
        if (_this2.isNumber(token)) {
          postfixExpression.push(parseFloat(token));
          return;
        }

        if (_this2.isConstant(token)) {
          postfixExpression.push(_this2.constants[token].name);
          return;
        }

        if (_this2.isSymbol(token)) {
          var operator = _this2.determineOperator(token, infixExpression[index - 1]);

          if (operator === undefined) {
            throw Error("Misused operator: ".concat(token));
          }

          while (_this2.topOperatorHasPrecedence(operatorStack, operator)) {
            postfixExpression.push(operatorStack.pop());
          }

          operatorStack.push(operator.name);
          return;
        }

        if (_this2.isOpenParenthesis(token)) {
          operatorStack.push(token);
          return;
        }

        if (_this2.isCloseParenthesis(token)) {
          while (!_this2.isOpenParenthesis(operatorStack[operatorStack.length - 1])) {
            if (!operatorStack.length) {
              throw Error('Mismatched parentheses');
            }

            postfixExpression.push(operatorStack.pop());
          }

          operatorStack.pop();
          return;
        }

        throw Error("Invalid token: ".concat(token));
      });

      while (operatorStack.length) {
        var operator = operatorStack[operatorStack.length - 1];

        if (this.isOpenParenthesis(operator) || this.isCloseParenthesis(operator)) {
          throw Error('Mismatched parentheses');
        }

        postfixExpression.push(operatorStack.pop());
      }

      return postfixExpression;
    }
  }, {
    key: "resolve",
    value: function resolve(postfixExpression) {
      var _this3 = this;

      if (!postfixExpression.length) {
        throw Error('No operations');
      }

      var evaluationStack = [];
      postfixExpression.forEach(function (token) {
        if (_this3.isNumber(token)) {
          evaluationStack.push(token);
          return;
        }

        if (_this3.isConstant(token)) {
          evaluationStack.push(_this3.constants[token].value);
          return;
        }

        var operator = _this3.operators[token];

        if (evaluationStack.length < operator.method.length) {
          throw Error('Missing operand');
        }

        if (operator.name === 'DIV' && evaluationStack[1] === 0) {
          throw Error('Division by zero');
        }

        var result = operator.method.apply(operator, _toConsumableArray(evaluationStack.splice(-operator.method.length)));
        evaluationStack.push(result);
      });

      if (evaluationStack.length > 1) {
        throw Error('Missing operator');
      }

      var reduction = evaluationStack[0];
      var result = (0, _lodash.default)(reduction, 8);
      return result;
    }
  }, {
    key: "evaluate",
    value: function evaluate(string) {
      try {
        var infixExpression = this.parse(string);
        var postfixExpression = this.convert(infixExpression);
        var result = this.resolve(postfixExpression);
        return result;
      } catch (error) {
        throw error;
      }
    }
  }]);

  return Evaluator;
}();

exports.default = Evaluator;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _evaluator = _interopRequireDefault(__webpack_require__(/*! ./evaluator */ "./src/evaluator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _evaluator.default;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/operator.js":
/*!*************************!*\
  !*** ./src/operator.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Operator =
/*#__PURE__*/
function () {
  function Operator(name, precedence, associativity, method) {
    _classCallCheck(this, Operator);

    this.name = name;
    this.precedence = precedence;
    this.associativity = associativity;
    this.method = method;
  }

  _createClass(Operator, [{
    key: "hasEqualPrecedence",
    value: function hasEqualPrecedence(operator) {
      return this.precedence === operator.precedence;
    }
  }, {
    key: "hasGreaterPrecedence",
    value: function hasGreaterPrecedence(operator) {
      return this.precedence > operator.precedence;
    }
  }, {
    key: "isLeftAssociative",
    value: function isLeftAssociative() {
      return this.associativity === 'left';
    }
  }]);

  return Operator;
}();

exports.default = Operator;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=evaluator.js.map