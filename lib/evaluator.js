(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("evaluator", [], factory);
	else if(typeof exports === 'object')
		exports["evaluator"] = factory();
	else
		root["evaluator"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmFsdWF0b3Ivd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V2YWx1YXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldmFsdWF0b3IvLi9ub2RlX21vZHVsZXMvbG9kYXNoLnJvdW5kL2luZGV4LmpzIiwid2VicGFjazovL2V2YWx1YXRvci8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vZXZhbHVhdG9yLy4vc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovL2V2YWx1YXRvci8uL3NyYy9ldmFsdWF0b3IuanMiLCJ3ZWJwYWNrOi8vZXZhbHVhdG9yLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2V2YWx1YXRvci8uL3NyYy9vcGVyYXRvci5qcyJdLCJuYW1lcyI6WyJDb25zdGFudCIsIm5hbWUiLCJ2YWx1ZSIsIkV2YWx1YXRvciIsInN5bWJvbHMiLCJpbmZpeCIsInByZWZpeCIsIm9wZXJhdG9ycyIsImEiLCJiIiwiY29uc3RhbnRzIiwiTWF0aCIsIkUiLCJQSSIsIm51bWJlcnMiLCJvcGVuUGFyZW50aGVzaXMiLCJjbG9zZVBhcmVudGhlc2lzIiwid2hpdGVzcGFjZSIsInRva2VuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidGVzdCIsIm9wZXJhdG9yU3RhY2siLCJjdXJyZW50T3BlcmF0b3IiLCJsZW5ndGgiLCJ0b3BUb2tlbiIsImlzT3BlcmF0b3IiLCJ0b3BPcGVyYXRvciIsIm1ldGhvZCIsImhhc0dyZWF0ZXJQcmVjZWRlbmNlIiwiaGFzRXF1YWxQcmVjZWRlbmNlIiwiaXNMZWZ0QXNzb2NpYXRpdmUiLCJwcmV2aW91c1Rva2VuIiwibm90YXRpb24iLCJ1bmRlZmluZWQiLCJpc09wZW5QYXJlbnRoZXNpcyIsImlzU3ltYm9sIiwiaXNDbG9zZVBhcmVudGhlc2lzIiwiaXNOdW1iZXIiLCJpc0NvbnN0YW50Iiwic3RyaW5nIiwiRXJyb3IiLCJwYXR0ZXJuIiwiaW5maXhFeHByZXNzaW9uIiwibWF0Y2giLCJmaWx0ZXIiLCJpc1doaXRlc3BhY2UiLCJtYXAiLCJ0b1VwcGVyQ2FzZSIsInBvc3RmaXhFeHByZXNzaW9uIiwiZm9yRWFjaCIsImluZGV4IiwicHVzaCIsInBhcnNlRmxvYXQiLCJvcGVyYXRvciIsImRldGVybWluZU9wZXJhdG9yIiwidG9wT3BlcmF0b3JIYXNQcmVjZWRlbmNlIiwicG9wIiwiZXZhbHVhdGlvblN0YWNrIiwicmVzdWx0Iiwic3BsaWNlIiwicmVkdWN0aW9uIiwicGFyc2UiLCJjb252ZXJ0IiwicmVzb2x2ZSIsImVycm9yIiwiT3BlcmF0b3IiLCJwcmVjZWRlbmNlIiwiYXNzb2NpYXRpdml0eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFP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LE1BQTlCO0FBQ0EiLCJmaWxlIjoiZXZhbHVhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJldmFsdWF0b3JcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZXZhbHVhdG9yXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImV2YWx1YXRvclwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwLFxuICAgIE1BWF9JTlRFR0VSID0gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDgsXG4gICAgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5yb3VuZGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBgTWF0aGAgbWV0aG9kIHRvIHVzZSB3aGVuIHJvdW5kaW5nLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgcm91bmQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJvdW5kKG1ldGhvZE5hbWUpIHtcbiAgdmFyIGZ1bmMgPSBNYXRoW21ldGhvZE5hbWVdO1xuICByZXR1cm4gZnVuY3Rpb24obnVtYmVyLCBwcmVjaXNpb24pIHtcbiAgICBudW1iZXIgPSB0b051bWJlcihudW1iZXIpO1xuICAgIHByZWNpc2lvbiA9IG5hdGl2ZU1pbih0b0ludGVnZXIocHJlY2lzaW9uKSwgMjkyKTtcbiAgICBpZiAocHJlY2lzaW9uKSB7XG4gICAgICAvLyBTaGlmdCB3aXRoIGV4cG9uZW50aWFsIG5vdGF0aW9uIHRvIGF2b2lkIGZsb2F0aW5nLXBvaW50IGlzc3Vlcy5cbiAgICAgIC8vIFNlZSBbTUROXShodHRwczovL21kbi5pby9yb3VuZCNFeGFtcGxlcykgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHZhciBwYWlyID0gKHRvU3RyaW5nKG51bWJlcikgKyAnZScpLnNwbGl0KCdlJyksXG4gICAgICAgICAgdmFsdWUgPSBmdW5jKHBhaXJbMF0gKyAnZScgKyAoK3BhaXJbMV0gKyBwcmVjaXNpb24pKTtcblxuICAgICAgcGFpciA9ICh0b1N0cmluZyh2YWx1ZSkgKyAnZScpLnNwbGl0KCdlJyk7XG4gICAgICByZXR1cm4gKyhwYWlyWzBdICsgJ2UnICsgKCtwYWlyWzFdIC0gcHJlY2lzaW9uKSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jKG51bWJlcik7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTIuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvRmluaXRlKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b0Zpbml0ZShJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9GaW5pdGUoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvRmluaXRlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9pbnRlZ2VyKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvSW50ZWdlcigzLjIpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMuMicpO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKSxcbiAgICAgIHJlbWFpbmRlciA9IHJlc3VsdCAlIDE7XG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdCkgOiAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIGBudW1iZXJgIHJvdW5kZWQgdG8gYHByZWNpc2lvbmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjEwLjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIFRoZSBudW1iZXIgdG8gcm91bmQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3ByZWNpc2lvbj0wXSBUaGUgcHJlY2lzaW9uIHRvIHJvdW5kIHRvLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgcm91bmRlZCBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ucm91bmQoNC4wMDYpO1xuICogLy8gPT4gNFxuICpcbiAqIF8ucm91bmQoNC4wMDYsIDIpO1xuICogLy8gPT4gNC4wMVxuICpcbiAqIF8ucm91bmQoNDA2MCwgLTIpO1xuICogLy8gPT4gNDEwMFxuICovXG52YXIgcm91bmQgPSBjcmVhdGVSb3VuZCgncm91bmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3VuZDtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0YW50IHtcblx0Y29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0fVxufVxuIiwiaW1wb3J0IHJvdW5kIGZyb20gJ2xvZGFzaC5yb3VuZCc7XG5pbXBvcnQgQ29uc3RhbnQgZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgT3BlcmF0b3IgZnJvbSAnLi9vcGVyYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2YWx1YXRvciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuc3ltYm9scyA9IHtcblx0XHRcdCdeJzoge2luZml4OiAnRVhQJ30sXG5cdFx0XHQnKic6IHtpbmZpeDogJ01VTCd9LFxuXHRcdFx0Jy8nOiB7aW5maXg6ICdESVYnfSxcblx0XHRcdCclJzoge2luZml4OiAnTU9EJ30sXG5cdFx0XHQnKyc6IHtpbmZpeDogJ0FERCcsIHByZWZpeDogJ1BPUyd9LFxuXHRcdFx0Jy0nOiB7aW5maXg6ICdTVUInLCBwcmVmaXg6ICdORUcnfSxcblx0XHR9O1xuXG5cdFx0dGhpcy5vcGVyYXRvcnMgPSB7XG5cdFx0XHQnRVhQJzogbmV3IE9wZXJhdG9yKCdFWFAnLCA0LCAncmlnaHQnLCAoYSwgYikgPT4gYSAqKiBiKSxcblx0XHRcdCdQT1MnOiBuZXcgT3BlcmF0b3IoJ1BPUycsIDMsICdyaWdodCcsIChhKSA9PiBhKSxcblx0XHRcdCdORUcnOiBuZXcgT3BlcmF0b3IoJ05FRycsIDMsICdyaWdodCcsIChhKSA9PiAtYSksXG5cdFx0XHQnTVVMJzogbmV3IE9wZXJhdG9yKCdNVUwnLCAyLCAnbGVmdCcsIChhLCBiKSA9PiBhICogYiksXG5cdFx0XHQnRElWJzogbmV3IE9wZXJhdG9yKCdESVYnLCAyLCAnbGVmdCcsIChhLCBiKSA9PiBhIC8gYiksXG5cdFx0XHQnTU9EJzogbmV3IE9wZXJhdG9yKCdNT0QnLCAyLCAnbGVmdCcsIChhLCBiKSA9PiBhICUgYiksXG5cdFx0XHQnQUREJzogbmV3IE9wZXJhdG9yKCdBREQnLCAxLCAnbGVmdCcsIChhLCBiKSA9PiBhICsgYiksXG5cdFx0XHQnU1VCJzogbmV3IE9wZXJhdG9yKCdTVUInLCAxLCAnbGVmdCcsIChhLCBiKSA9PiBhIC0gYiksXG5cdFx0fTtcblxuXHRcdHRoaXMuY29uc3RhbnRzID0ge1xuXHRcdFx0J0UnOiBuZXcgQ29uc3RhbnQoJ0UnLCBNYXRoLkUpLFxuXHRcdFx0J1BJJzogbmV3IENvbnN0YW50KCdQSScsIE1hdGguUEkpLFxuXHRcdH07XG5cblx0XHR0aGlzLm51bWJlcnMgPSAvKFxcZCtcXC5cXGQqKXwoXFxkKlxcLlxcZCspfChcXGQrKS87XG5cblx0XHR0aGlzLm9wZW5QYXJlbnRoZXNpcyA9ICcoJztcblxuXHRcdHRoaXMuY2xvc2VQYXJlbnRoZXNpcyA9ICcpJztcblxuXHRcdHRoaXMud2hpdGVzcGFjZSA9IC9cXHMvO1xuXHR9XG5cblx0aXNTeW1ib2wodG9rZW4pIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuc3ltYm9scywgdG9rZW4pO1xuXHR9XG5cblx0aXNPcGVyYXRvcih0b2tlbikge1xuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5vcGVyYXRvcnMsIHRva2VuKTtcblx0fVxuXG5cdGlzQ29uc3RhbnQodG9rZW4pIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY29uc3RhbnRzLCB0b2tlbik7XG5cdH1cblxuXHRpc051bWJlcih0b2tlbikge1xuXHRcdHJldHVybiB0aGlzLm51bWJlcnMudGVzdCh0b2tlbik7XG5cdH1cblxuXHRpc09wZW5QYXJlbnRoZXNpcyh0b2tlbikge1xuXHRcdHJldHVybiB0b2tlbiA9PT0gdGhpcy5vcGVuUGFyZW50aGVzaXM7XG5cdH1cblxuXHRpc0Nsb3NlUGFyZW50aGVzaXModG9rZW4pIHtcblx0XHRyZXR1cm4gdG9rZW4gPT09IHRoaXMuY2xvc2VQYXJlbnRoZXNpcztcblx0fVxuXG5cdGlzV2hpdGVzcGFjZSh0b2tlbikge1xuXHRcdHJldHVybiB0aGlzLndoaXRlc3BhY2UudGVzdCh0b2tlbik7XG5cdH1cblxuXHR0b3BPcGVyYXRvckhhc1ByZWNlZGVuY2Uob3BlcmF0b3JTdGFjaywgY3VycmVudE9wZXJhdG9yKSB7XG5cdFx0aWYgKCFvcGVyYXRvclN0YWNrLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0Y29uc3QgdG9wVG9rZW4gPSBvcGVyYXRvclN0YWNrW29wZXJhdG9yU3RhY2subGVuZ3RoIC0gMV07XG5cblx0XHRpZiAoIXRoaXMuaXNPcGVyYXRvcih0b3BUb2tlbikpIHJldHVybiBmYWxzZTtcblxuXHRcdGNvbnN0IHRvcE9wZXJhdG9yID0gdGhpcy5vcGVyYXRvcnNbdG9wVG9rZW5dO1xuXG5cdFx0aWYgKGN1cnJlbnRPcGVyYXRvci5tZXRob2QubGVuZ3RoID09PSAxICYmIHRvcE9wZXJhdG9yLm1ldGhvZC5sZW5ndGggPiAxKSByZXR1cm4gZmFsc2U7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0dG9wT3BlcmF0b3IuaGFzR3JlYXRlclByZWNlZGVuY2UoY3VycmVudE9wZXJhdG9yKVxuXHRcdFx0fHwgKHRvcE9wZXJhdG9yLmhhc0VxdWFsUHJlY2VkZW5jZShjdXJyZW50T3BlcmF0b3IpICYmIHRvcE9wZXJhdG9yLmlzTGVmdEFzc29jaWF0aXZlKCkpXG5cdFx0KTtcblx0fVxuXG5cdGRldGVybWluZU9wZXJhdG9yKHRva2VuLCBwcmV2aW91c1Rva2VuKSB7XG5cdFx0bGV0IG5vdGF0aW9uO1xuXG5cdFx0aWYgKFxuXHRcdFx0cHJldmlvdXNUb2tlbiA9PT0gdW5kZWZpbmVkXG5cdFx0XHR8fCB0aGlzLmlzT3BlblBhcmVudGhlc2lzKHByZXZpb3VzVG9rZW4pXG5cdFx0XHR8fCB0aGlzLmlzU3ltYm9sKHByZXZpb3VzVG9rZW4pXG5cdFx0KSB7XG5cdFx0XHRub3RhdGlvbiA9ICdwcmVmaXgnO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHR0aGlzLmlzQ2xvc2VQYXJlbnRoZXNpcyhwcmV2aW91c1Rva2VuKVxuXHRcdFx0fHwgKHRoaXMuaXNOdW1iZXIocHJldmlvdXNUb2tlbilcblx0XHRcdHx8IHRoaXMuaXNDb25zdGFudChwcmV2aW91c1Rva2VuKSlcblx0XHQpIHtcblx0XHRcdG5vdGF0aW9uID0gJ2luZml4Jztcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5vcGVyYXRvcnNbdGhpcy5zeW1ib2xzW3Rva2VuXVtub3RhdGlvbl1dO1xuXHR9XG5cblx0cGFyc2Uoc3RyaW5nKSB7XG5cdFx0aWYgKCFzdHJpbmcubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBFcnJvcignTm8gaW5wdXQnKTtcblx0XHR9XG5cblx0XHRjb25zdCBwYXR0ZXJuID0gLyhcXGQrXFwuXFxkKil8KFxcZCpcXC5cXGQrKXwoXFxkKyl8KFthLXpBLVpdKyl8KC4pL2c7XG5cdFx0Y29uc3QgaW5maXhFeHByZXNzaW9uID0gKHN0cmluZy5tYXRjaChwYXR0ZXJuKSB8fCBbXSlcblx0XHRcdC5maWx0ZXIoKHRva2VuKSA9PiAhdGhpcy5pc1doaXRlc3BhY2UodG9rZW4pKVxuXHRcdFx0Lm1hcCgodG9rZW4pID0+IHRva2VuLnRvVXBwZXJDYXNlKCkpO1xuXG5cdFx0cmV0dXJuIGluZml4RXhwcmVzc2lvbjtcblx0fVxuXG5cdGNvbnZlcnQoaW5maXhFeHByZXNzaW9uKSB7XG5cdFx0aWYgKCFpbmZpeEV4cHJlc3Npb24ubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBFcnJvcignTm8gdmFsaWQgdG9rZW5zJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3BlcmF0b3JTdGFjayA9IFtdO1xuXHRcdGNvbnN0IHBvc3RmaXhFeHByZXNzaW9uID0gW107XG5cblx0XHRpbmZpeEV4cHJlc3Npb24uZm9yRWFjaCgodG9rZW4sIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAodGhpcy5pc051bWJlcih0b2tlbikpIHtcblx0XHRcdFx0cG9zdGZpeEV4cHJlc3Npb24ucHVzaChwYXJzZUZsb2F0KHRva2VuKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuaXNDb25zdGFudCh0b2tlbikpIHtcblx0XHRcdFx0cG9zdGZpeEV4cHJlc3Npb24ucHVzaCh0aGlzLmNvbnN0YW50c1t0b2tlbl0ubmFtZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuaXNTeW1ib2wodG9rZW4pKSB7XG5cdFx0XHRcdGNvbnN0IG9wZXJhdG9yID0gdGhpcy5kZXRlcm1pbmVPcGVyYXRvcih0b2tlbiwgaW5maXhFeHByZXNzaW9uW2luZGV4IC0gMV0pO1xuXG5cdFx0XHRcdGlmIChvcGVyYXRvciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhyb3cgRXJyb3IoYE1pc3VzZWQgb3BlcmF0b3I6ICR7dG9rZW59YCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aGlsZSAodGhpcy50b3BPcGVyYXRvckhhc1ByZWNlZGVuY2Uob3BlcmF0b3JTdGFjaywgb3BlcmF0b3IpKSB7XG5cdFx0XHRcdFx0cG9zdGZpeEV4cHJlc3Npb24ucHVzaChvcGVyYXRvclN0YWNrLnBvcCgpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG9wZXJhdG9yU3RhY2sucHVzaChvcGVyYXRvci5uYW1lKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5pc09wZW5QYXJlbnRoZXNpcyh0b2tlbikpIHtcblx0XHRcdFx0b3BlcmF0b3JTdGFjay5wdXNoKHRva2VuKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5pc0Nsb3NlUGFyZW50aGVzaXModG9rZW4pKSB7XG5cdFx0XHRcdHdoaWxlICghdGhpcy5pc09wZW5QYXJlbnRoZXNpcyhvcGVyYXRvclN0YWNrW29wZXJhdG9yU3RhY2subGVuZ3RoIC0gMV0pKSB7XG5cdFx0XHRcdFx0aWYgKCFvcGVyYXRvclN0YWNrLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0dGhyb3cgRXJyb3IoJ01pc21hdGNoZWQgcGFyZW50aGVzZXMnKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRwb3N0Zml4RXhwcmVzc2lvbi5wdXNoKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0b3BlcmF0b3JTdGFjay5wb3AoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aHJvdyBFcnJvcihgSW52YWxpZCB0b2tlbjogJHt0b2tlbn1gKTtcblx0XHR9KTtcblxuXHRcdHdoaWxlIChvcGVyYXRvclN0YWNrLmxlbmd0aCkge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3IgPSBvcGVyYXRvclN0YWNrW29wZXJhdG9yU3RhY2subGVuZ3RoIC0gMV07XG5cblx0XHRcdGlmICh0aGlzLmlzT3BlblBhcmVudGhlc2lzKG9wZXJhdG9yKSB8fCB0aGlzLmlzQ2xvc2VQYXJlbnRoZXNpcyhvcGVyYXRvcikpIHtcblx0XHRcdFx0dGhyb3cgRXJyb3IoJ01pc21hdGNoZWQgcGFyZW50aGVzZXMnKTtcblx0XHRcdH1cblxuXHRcdFx0cG9zdGZpeEV4cHJlc3Npb24ucHVzaChvcGVyYXRvclN0YWNrLnBvcCgpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcG9zdGZpeEV4cHJlc3Npb247XG5cdH1cblxuXHRyZXNvbHZlKHBvc3RmaXhFeHByZXNzaW9uKSB7XG5cdFx0aWYgKCFwb3N0Zml4RXhwcmVzc2lvbi5sZW5ndGgpIHtcblx0XHRcdHRocm93IEVycm9yKCdObyBvcGVyYXRpb25zJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZXZhbHVhdGlvblN0YWNrID0gW107XG5cblx0XHRwb3N0Zml4RXhwcmVzc2lvbi5mb3JFYWNoKCh0b2tlbikgPT4ge1xuXHRcdFx0aWYgKHRoaXMuaXNOdW1iZXIodG9rZW4pKSB7XG5cdFx0XHRcdGV2YWx1YXRpb25TdGFjay5wdXNoKHRva2VuKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5pc0NvbnN0YW50KHRva2VuKSkge1xuXHRcdFx0XHRldmFsdWF0aW9uU3RhY2sucHVzaCh0aGlzLmNvbnN0YW50c1t0b2tlbl0udmFsdWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG9wZXJhdG9yID0gdGhpcy5vcGVyYXRvcnNbdG9rZW5dO1xuXG5cdFx0XHRpZiAoZXZhbHVhdGlvblN0YWNrLmxlbmd0aCA8IG9wZXJhdG9yLm1ldGhvZC5sZW5ndGgpIHtcblx0XHRcdFx0dGhyb3cgRXJyb3IoJ01pc3Npbmcgb3BlcmFuZCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob3BlcmF0b3IubmFtZSA9PT0gJ0RJVicgJiYgZXZhbHVhdGlvblN0YWNrWzFdID09PSAwKSB7XG5cdFx0XHRcdHRocm93IEVycm9yKCdEaXZpc2lvbiBieSB6ZXJvJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IG9wZXJhdG9yLm1ldGhvZCguLi5ldmFsdWF0aW9uU3RhY2suc3BsaWNlKC1vcGVyYXRvci5tZXRob2QubGVuZ3RoKSk7XG5cdFx0XHRldmFsdWF0aW9uU3RhY2sucHVzaChyZXN1bHQpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKGV2YWx1YXRpb25TdGFjay5sZW5ndGggPiAxKSB7XG5cdFx0XHR0aHJvdyBFcnJvcignTWlzc2luZyBvcGVyYXRvcicpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlZHVjdGlvbiA9IGV2YWx1YXRpb25TdGFja1swXTtcblx0XHRjb25zdCByZXN1bHQgPSByb3VuZChyZWR1Y3Rpb24sIDgpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGV2YWx1YXRlKHN0cmluZykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBpbmZpeEV4cHJlc3Npb24gPSB0aGlzLnBhcnNlKHN0cmluZyk7XG5cdFx0XHRjb25zdCBwb3N0Zml4RXhwcmVzc2lvbiA9IHRoaXMuY29udmVydChpbmZpeEV4cHJlc3Npb24pO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5yZXNvbHZlKHBvc3RmaXhFeHByZXNzaW9uKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IEV2YWx1YXRvciBmcm9tICcuL2V2YWx1YXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IEV2YWx1YXRvcjtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZXJhdG9yIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJlY2VkZW5jZSwgYXNzb2NpYXRpdml0eSwgbWV0aG9kKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuXHRcdHRoaXMuYXNzb2NpYXRpdml0eSA9IGFzc29jaWF0aXZpdHk7XG5cdFx0dGhpcy5tZXRob2QgPSBtZXRob2Q7XG5cdH1cblxuXHRoYXNFcXVhbFByZWNlZGVuY2Uob3BlcmF0b3IpIHtcblx0XHRyZXR1cm4gdGhpcy5wcmVjZWRlbmNlID09PSBvcGVyYXRvci5wcmVjZWRlbmNlO1xuXHR9XG5cblx0aGFzR3JlYXRlclByZWNlZGVuY2Uob3BlcmF0b3IpIHtcblx0XHRyZXR1cm4gdGhpcy5wcmVjZWRlbmNlID4gb3BlcmF0b3IucHJlY2VkZW5jZTtcblx0fVxuXG5cdGlzTGVmdEFzc29jaWF0aXZlKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc29jaWF0aXZpdHkgPT09ICdsZWZ0Jztcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==