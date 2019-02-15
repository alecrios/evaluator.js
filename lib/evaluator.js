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
Object.defineProperty(exports, "Constant", {
  enumerable: true,
  get: function get() {
    return _constant.default;
  }
});
Object.defineProperty(exports, "Evaluator", {
  enumerable: true,
  get: function get() {
    return _evaluator.default;
  }
});
Object.defineProperty(exports, "Operator", {
  enumerable: true,
  get: function get() {
    return _operator.default;
  }
});

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./src/constant.js"));

var _evaluator = _interopRequireDefault(__webpack_require__(/*! ./evaluator */ "./src/evaluator.js"));

var _operator = _interopRequireDefault(__webpack_require__(/*! ./operator */ "./src/operator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmFsdWF0b3Ivd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V2YWx1YXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldmFsdWF0b3IvLi9ub2RlX21vZHVsZXMvbG9kYXNoLnJvdW5kL2luZGV4LmpzIiwid2VicGFjazovL2V2YWx1YXRvci8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vZXZhbHVhdG9yLy4vc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovL2V2YWx1YXRvci8uL3NyYy9ldmFsdWF0b3IuanMiLCJ3ZWJwYWNrOi8vZXZhbHVhdG9yLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2V2YWx1YXRvci8uL3NyYy9vcGVyYXRvci5qcyJdLCJuYW1lcyI6WyJDb25zdGFudCIsIm5hbWUiLCJ2YWx1ZSIsIkV2YWx1YXRvciIsInN5bWJvbHMiLCJpbmZpeCIsInByZWZpeCIsIm9wZXJhdG9ycyIsImEiLCJiIiwiY29uc3RhbnRzIiwiTWF0aCIsIkUiLCJQSSIsIm51bWJlcnMiLCJvcGVuUGFyZW50aGVzaXMiLCJjbG9zZVBhcmVudGhlc2lzIiwid2hpdGVzcGFjZSIsInRva2VuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidGVzdCIsIm9wZXJhdG9yU3RhY2siLCJjdXJyZW50T3BlcmF0b3IiLCJsZW5ndGgiLCJ0b3BUb2tlbiIsImlzT3BlcmF0b3IiLCJ0b3BPcGVyYXRvciIsIm1ldGhvZCIsImhhc0dyZWF0ZXJQcmVjZWRlbmNlIiwiaGFzRXF1YWxQcmVjZWRlbmNlIiwiaXNMZWZ0QXNzb2NpYXRpdmUiLCJwcmV2aW91c1Rva2VuIiwibm90YXRpb24iLCJ1bmRlZmluZWQiLCJpc09wZW5QYXJlbnRoZXNpcyIsImlzU3ltYm9sIiwiaXNDbG9zZVBhcmVudGhlc2lzIiwiaXNOdW1iZXIiLCJpc0NvbnN0YW50Iiwic3RyaW5nIiwiRXJyb3IiLCJwYXR0ZXJuIiwiaW5maXhFeHByZXNzaW9uIiwibWF0Y2giLCJmaWx0ZXIiLCJpc1doaXRlc3BhY2UiLCJtYXAiLCJ0b1VwcGVyQ2FzZSIsInBvc3RmaXhFeHByZXNzaW9uIiwiZm9yRWFjaCIsImluZGV4IiwicHVzaCIsInBhcnNlRmxvYXQiLCJvcGVyYXRvciIsImRldGVybWluZU9wZXJhdG9yIiwidG9wT3BlcmF0b3JIYXNQcmVjZWRlbmNlIiwicG9wIiwiZXZhbHVhdGlvblN0YWNrIiwicmVzdWx0Iiwic3BsaWNlIiwicmVkdWN0aW9uIiwicGFyc2UiLCJjb252ZXJ0IiwicmVzb2x2ZSIsImVycm9yIiwiT3BlcmF0b3IiLCJwcmVjZWRlbmNlIiwiYXNzb2NpYXRpdml0eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFP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Q25CLGFBQU8sS0FBS0MsYUFBTCxLQUF1QixNQUE5QjtBQUNBIiwiZmlsZSI6ImV2YWx1YXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZXZhbHVhdG9yXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImV2YWx1YXRvclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJldmFsdWF0b3JcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4LFxuICAgIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8ucm91bmRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgYE1hdGhgIG1ldGhvZCB0byB1c2Ugd2hlbiByb3VuZGluZy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHJvdW5kIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSb3VuZChtZXRob2ROYW1lKSB7XG4gIHZhciBmdW5jID0gTWF0aFttZXRob2ROYW1lXTtcbiAgcmV0dXJuIGZ1bmN0aW9uKG51bWJlciwgcHJlY2lzaW9uKSB7XG4gICAgbnVtYmVyID0gdG9OdW1iZXIobnVtYmVyKTtcbiAgICBwcmVjaXNpb24gPSBuYXRpdmVNaW4odG9JbnRlZ2VyKHByZWNpc2lvbiksIDI5Mik7XG4gICAgaWYgKHByZWNpc2lvbikge1xuICAgICAgLy8gU2hpZnQgd2l0aCBleHBvbmVudGlhbCBub3RhdGlvbiB0byBhdm9pZCBmbG9hdGluZy1wb2ludCBpc3N1ZXMuXG4gICAgICAvLyBTZWUgW01ETl0oaHR0cHM6Ly9tZG4uaW8vcm91bmQjRXhhbXBsZXMpIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICB2YXIgcGFpciA9ICh0b1N0cmluZyhudW1iZXIpICsgJ2UnKS5zcGxpdCgnZScpLFxuICAgICAgICAgIHZhbHVlID0gZnVuYyhwYWlyWzBdICsgJ2UnICsgKCtwYWlyWzFdICsgcHJlY2lzaW9uKSk7XG5cbiAgICAgIHBhaXIgPSAodG9TdHJpbmcodmFsdWUpICsgJ2UnKS5zcGxpdCgnZScpO1xuICAgICAgcmV0dXJuICsocGFpclswXSArICdlJyArICgrcGFpclsxXSAtIHByZWNpc2lvbikpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYyhudW1iZXIpO1xuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIGZpbml0ZSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEyLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0Zpbml0ZSgzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b0Zpbml0ZShOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9GaW5pdGUoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvRmluaXRlKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b0Zpbml0ZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiAwO1xuICB9XG4gIHZhbHVlID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAodmFsdWUgPT09IElORklOSVRZIHx8IHZhbHVlID09PSAtSU5GSU5JVFkpIHtcbiAgICB2YXIgc2lnbiA9ICh2YWx1ZSA8IDAgPyAtMSA6IDEpO1xuICAgIHJldHVybiBzaWduICogTUFYX0lOVEVHRVI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHZhbHVlIDogMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGludGVnZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgaW50ZWdlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0ludGVnZXIoMy4yKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnRvSW50ZWdlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDBcbiAqXG4gKiBfLnRvSW50ZWdlcihJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9JbnRlZ2VyKCczLjInKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0b0Zpbml0ZSh2YWx1ZSksXG4gICAgICByZW1haW5kZXIgPSByZXN1bHQgJSAxO1xuXG4gIHJldHVybiByZXN1bHQgPT09IHJlc3VsdCA/IChyZW1haW5kZXIgPyByZXN1bHQgLSByZW1haW5kZXIgOiByZXN1bHQpIDogMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyBgbnVtYmVyYCByb3VuZGVkIHRvIGBwcmVjaXNpb25gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4xMC4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciBUaGUgbnVtYmVyIHRvIHJvdW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IFtwcmVjaXNpb249MF0gVGhlIHByZWNpc2lvbiB0byByb3VuZCB0by5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHJvdW5kZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnJvdW5kKDQuMDA2KTtcbiAqIC8vID0+IDRcbiAqXG4gKiBfLnJvdW5kKDQuMDA2LCAyKTtcbiAqIC8vID0+IDQuMDFcbiAqXG4gKiBfLnJvdW5kKDQwNjAsIC0yKTtcbiAqIC8vID0+IDQxMDBcbiAqL1xudmFyIHJvdW5kID0gY3JlYXRlUm91bmQoJ3JvdW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91bmQ7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdGFudCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cbn1cbiIsImltcG9ydCByb3VuZCBmcm9tICdsb2Rhc2gucm91bmQnO1xuaW1wb3J0IENvbnN0YW50IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IE9wZXJhdG9yIGZyb20gJy4vb3BlcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmFsdWF0b3Ige1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnN5bWJvbHMgPSB7XG5cdFx0XHQnXic6IHtpbmZpeDogJ0VYUCd9LFxuXHRcdFx0JyonOiB7aW5maXg6ICdNVUwnfSxcblx0XHRcdCcvJzoge2luZml4OiAnRElWJ30sXG5cdFx0XHQnJSc6IHtpbmZpeDogJ01PRCd9LFxuXHRcdFx0JysnOiB7aW5maXg6ICdBREQnLCBwcmVmaXg6ICdQT1MnfSxcblx0XHRcdCctJzoge2luZml4OiAnU1VCJywgcHJlZml4OiAnTkVHJ30sXG5cdFx0fTtcblxuXHRcdHRoaXMub3BlcmF0b3JzID0ge1xuXHRcdFx0J0VYUCc6IG5ldyBPcGVyYXRvcignRVhQJywgNCwgJ3JpZ2h0JywgKGEsIGIpID0+IGEgKiogYiksXG5cdFx0XHQnUE9TJzogbmV3IE9wZXJhdG9yKCdQT1MnLCAzLCAncmlnaHQnLCAoYSkgPT4gYSksXG5cdFx0XHQnTkVHJzogbmV3IE9wZXJhdG9yKCdORUcnLCAzLCAncmlnaHQnLCAoYSkgPT4gLWEpLFxuXHRcdFx0J01VTCc6IG5ldyBPcGVyYXRvcignTVVMJywgMiwgJ2xlZnQnLCAoYSwgYikgPT4gYSAqIGIpLFxuXHRcdFx0J0RJVic6IG5ldyBPcGVyYXRvcignRElWJywgMiwgJ2xlZnQnLCAoYSwgYikgPT4gYSAvIGIpLFxuXHRcdFx0J01PRCc6IG5ldyBPcGVyYXRvcignTU9EJywgMiwgJ2xlZnQnLCAoYSwgYikgPT4gYSAlIGIpLFxuXHRcdFx0J0FERCc6IG5ldyBPcGVyYXRvcignQUREJywgMSwgJ2xlZnQnLCAoYSwgYikgPT4gYSArIGIpLFxuXHRcdFx0J1NVQic6IG5ldyBPcGVyYXRvcignU1VCJywgMSwgJ2xlZnQnLCAoYSwgYikgPT4gYSAtIGIpLFxuXHRcdH07XG5cblx0XHR0aGlzLmNvbnN0YW50cyA9IHtcblx0XHRcdCdFJzogbmV3IENvbnN0YW50KCdFJywgTWF0aC5FKSxcblx0XHRcdCdQSSc6IG5ldyBDb25zdGFudCgnUEknLCBNYXRoLlBJKSxcblx0XHR9O1xuXG5cdFx0dGhpcy5udW1iZXJzID0gLyhcXGQrXFwuXFxkKil8KFxcZCpcXC5cXGQrKXwoXFxkKykvO1xuXG5cdFx0dGhpcy5vcGVuUGFyZW50aGVzaXMgPSAnKCc7XG5cblx0XHR0aGlzLmNsb3NlUGFyZW50aGVzaXMgPSAnKSc7XG5cblx0XHR0aGlzLndoaXRlc3BhY2UgPSAvXFxzLztcblx0fVxuXG5cdGlzU3ltYm9sKHRva2VuKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLnN5bWJvbHMsIHRva2VuKTtcblx0fVxuXG5cdGlzT3BlcmF0b3IodG9rZW4pIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMub3BlcmF0b3JzLCB0b2tlbik7XG5cdH1cblxuXHRpc0NvbnN0YW50KHRva2VuKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNvbnN0YW50cywgdG9rZW4pO1xuXHR9XG5cblx0aXNOdW1iZXIodG9rZW4pIHtcblx0XHRyZXR1cm4gdGhpcy5udW1iZXJzLnRlc3QodG9rZW4pO1xuXHR9XG5cblx0aXNPcGVuUGFyZW50aGVzaXModG9rZW4pIHtcblx0XHRyZXR1cm4gdG9rZW4gPT09IHRoaXMub3BlblBhcmVudGhlc2lzO1xuXHR9XG5cblx0aXNDbG9zZVBhcmVudGhlc2lzKHRva2VuKSB7XG5cdFx0cmV0dXJuIHRva2VuID09PSB0aGlzLmNsb3NlUGFyZW50aGVzaXM7XG5cdH1cblxuXHRpc1doaXRlc3BhY2UodG9rZW4pIHtcblx0XHRyZXR1cm4gdGhpcy53aGl0ZXNwYWNlLnRlc3QodG9rZW4pO1xuXHR9XG5cblx0dG9wT3BlcmF0b3JIYXNQcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2ssIGN1cnJlbnRPcGVyYXRvcikge1xuXHRcdGlmICghb3BlcmF0b3JTdGFjay5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuXHRcdGNvbnN0IHRvcFRva2VuID0gb3BlcmF0b3JTdGFja1tvcGVyYXRvclN0YWNrLmxlbmd0aCAtIDFdO1xuXG5cdFx0aWYgKCF0aGlzLmlzT3BlcmF0b3IodG9wVG9rZW4pKSByZXR1cm4gZmFsc2U7XG5cblx0XHRjb25zdCB0b3BPcGVyYXRvciA9IHRoaXMub3BlcmF0b3JzW3RvcFRva2VuXTtcblxuXHRcdGlmIChjdXJyZW50T3BlcmF0b3IubWV0aG9kLmxlbmd0aCA9PT0gMSAmJiB0b3BPcGVyYXRvci5tZXRob2QubGVuZ3RoID4gMSkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdHRvcE9wZXJhdG9yLmhhc0dyZWF0ZXJQcmVjZWRlbmNlKGN1cnJlbnRPcGVyYXRvcilcblx0XHRcdHx8ICh0b3BPcGVyYXRvci5oYXNFcXVhbFByZWNlZGVuY2UoY3VycmVudE9wZXJhdG9yKSAmJiB0b3BPcGVyYXRvci5pc0xlZnRBc3NvY2lhdGl2ZSgpKVxuXHRcdCk7XG5cdH1cblxuXHRkZXRlcm1pbmVPcGVyYXRvcih0b2tlbiwgcHJldmlvdXNUb2tlbikge1xuXHRcdGxldCBub3RhdGlvbjtcblxuXHRcdGlmIChcblx0XHRcdHByZXZpb3VzVG9rZW4gPT09IHVuZGVmaW5lZFxuXHRcdFx0fHwgdGhpcy5pc09wZW5QYXJlbnRoZXNpcyhwcmV2aW91c1Rva2VuKVxuXHRcdFx0fHwgdGhpcy5pc1N5bWJvbChwcmV2aW91c1Rva2VuKVxuXHRcdCkge1xuXHRcdFx0bm90YXRpb24gPSAncHJlZml4Jztcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0dGhpcy5pc0Nsb3NlUGFyZW50aGVzaXMocHJldmlvdXNUb2tlbilcblx0XHRcdHx8ICh0aGlzLmlzTnVtYmVyKHByZXZpb3VzVG9rZW4pXG5cdFx0XHR8fCB0aGlzLmlzQ29uc3RhbnQocHJldmlvdXNUb2tlbikpXG5cdFx0KSB7XG5cdFx0XHRub3RhdGlvbiA9ICdpbmZpeCc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMub3BlcmF0b3JzW3RoaXMuc3ltYm9sc1t0b2tlbl1bbm90YXRpb25dXTtcblx0fVxuXG5cdHBhcnNlKHN0cmluZykge1xuXHRcdGlmICghc3RyaW5nLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ05vIGlucHV0Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGF0dGVybiA9IC8oXFxkK1xcLlxcZCopfChcXGQqXFwuXFxkKyl8KFxcZCspfChbYS16QS1aXSspfCguKS9nO1xuXHRcdGNvbnN0IGluZml4RXhwcmVzc2lvbiA9IChzdHJpbmcubWF0Y2gocGF0dGVybikgfHwgW10pXG5cdFx0XHQuZmlsdGVyKCh0b2tlbikgPT4gIXRoaXMuaXNXaGl0ZXNwYWNlKHRva2VuKSlcblx0XHRcdC5tYXAoKHRva2VuKSA9PiB0b2tlbi50b1VwcGVyQ2FzZSgpKTtcblxuXHRcdHJldHVybiBpbmZpeEV4cHJlc3Npb247XG5cdH1cblxuXHRjb252ZXJ0KGluZml4RXhwcmVzc2lvbikge1xuXHRcdGlmICghaW5maXhFeHByZXNzaW9uLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ05vIHZhbGlkIHRva2VucycpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wZXJhdG9yU3RhY2sgPSBbXTtcblx0XHRjb25zdCBwb3N0Zml4RXhwcmVzc2lvbiA9IFtdO1xuXG5cdFx0aW5maXhFeHByZXNzaW9uLmZvckVhY2goKHRva2VuLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuaXNOdW1iZXIodG9rZW4pKSB7XG5cdFx0XHRcdHBvc3RmaXhFeHByZXNzaW9uLnB1c2gocGFyc2VGbG9hdCh0b2tlbikpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmlzQ29uc3RhbnQodG9rZW4pKSB7XG5cdFx0XHRcdHBvc3RmaXhFeHByZXNzaW9uLnB1c2godGhpcy5jb25zdGFudHNbdG9rZW5dLm5hbWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmlzU3ltYm9sKHRva2VuKSkge1xuXHRcdFx0XHRjb25zdCBvcGVyYXRvciA9IHRoaXMuZGV0ZXJtaW5lT3BlcmF0b3IodG9rZW4sIGluZml4RXhwcmVzc2lvbltpbmRleCAtIDFdKTtcblxuXHRcdFx0XHRpZiAob3BlcmF0b3IgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRocm93IEVycm9yKGBNaXN1c2VkIG9wZXJhdG9yOiAke3Rva2VufWApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2hpbGUgKHRoaXMudG9wT3BlcmF0b3JIYXNQcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2ssIG9wZXJhdG9yKSkge1xuXHRcdFx0XHRcdHBvc3RmaXhFeHByZXNzaW9uLnB1c2gob3BlcmF0b3JTdGFjay5wb3AoKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvcGVyYXRvclN0YWNrLnB1c2gob3BlcmF0b3IubmFtZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuaXNPcGVuUGFyZW50aGVzaXModG9rZW4pKSB7XG5cdFx0XHRcdG9wZXJhdG9yU3RhY2sucHVzaCh0b2tlbik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuaXNDbG9zZVBhcmVudGhlc2lzKHRva2VuKSkge1xuXHRcdFx0XHR3aGlsZSAoIXRoaXMuaXNPcGVuUGFyZW50aGVzaXMob3BlcmF0b3JTdGFja1tvcGVyYXRvclN0YWNrLmxlbmd0aCAtIDFdKSkge1xuXHRcdFx0XHRcdGlmICghb3BlcmF0b3JTdGFjay5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHRocm93IEVycm9yKCdNaXNtYXRjaGVkIHBhcmVudGhlc2VzJyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cG9zdGZpeEV4cHJlc3Npb24ucHVzaChvcGVyYXRvclN0YWNrLnBvcCgpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG9wZXJhdG9yU3RhY2sucG9wKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhyb3cgRXJyb3IoYEludmFsaWQgdG9rZW46ICR7dG9rZW59YCk7XG5cdFx0fSk7XG5cblx0XHR3aGlsZSAob3BlcmF0b3JTdGFjay5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IG9wZXJhdG9yID0gb3BlcmF0b3JTdGFja1tvcGVyYXRvclN0YWNrLmxlbmd0aCAtIDFdO1xuXG5cdFx0XHRpZiAodGhpcy5pc09wZW5QYXJlbnRoZXNpcyhvcGVyYXRvcikgfHwgdGhpcy5pc0Nsb3NlUGFyZW50aGVzaXMob3BlcmF0b3IpKSB7XG5cdFx0XHRcdHRocm93IEVycm9yKCdNaXNtYXRjaGVkIHBhcmVudGhlc2VzJyk7XG5cdFx0XHR9XG5cblx0XHRcdHBvc3RmaXhFeHByZXNzaW9uLnB1c2gob3BlcmF0b3JTdGFjay5wb3AoKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvc3RmaXhFeHByZXNzaW9uO1xuXHR9XG5cblx0cmVzb2x2ZShwb3N0Zml4RXhwcmVzc2lvbikge1xuXHRcdGlmICghcG9zdGZpeEV4cHJlc3Npb24ubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBFcnJvcignTm8gb3BlcmF0aW9ucycpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGV2YWx1YXRpb25TdGFjayA9IFtdO1xuXG5cdFx0cG9zdGZpeEV4cHJlc3Npb24uZm9yRWFjaCgodG9rZW4pID0+IHtcblx0XHRcdGlmICh0aGlzLmlzTnVtYmVyKHRva2VuKSkge1xuXHRcdFx0XHRldmFsdWF0aW9uU3RhY2sucHVzaCh0b2tlbik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuaXNDb25zdGFudCh0b2tlbikpIHtcblx0XHRcdFx0ZXZhbHVhdGlvblN0YWNrLnB1c2godGhpcy5jb25zdGFudHNbdG9rZW5dLnZhbHVlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvcGVyYXRvciA9IHRoaXMub3BlcmF0b3JzW3Rva2VuXTtcblxuXHRcdFx0aWYgKGV2YWx1YXRpb25TdGFjay5sZW5ndGggPCBvcGVyYXRvci5tZXRob2QubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IEVycm9yKCdNaXNzaW5nIG9wZXJhbmQnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wZXJhdG9yLm5hbWUgPT09ICdESVYnICYmIGV2YWx1YXRpb25TdGFja1sxXSA9PT0gMCkge1xuXHRcdFx0XHR0aHJvdyBFcnJvcignRGl2aXNpb24gYnkgemVybycpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBvcGVyYXRvci5tZXRob2QoLi4uZXZhbHVhdGlvblN0YWNrLnNwbGljZSgtb3BlcmF0b3IubWV0aG9kLmxlbmd0aCkpO1xuXHRcdFx0ZXZhbHVhdGlvblN0YWNrLnB1c2gocmVzdWx0KTtcblx0XHR9KTtcblxuXHRcdGlmIChldmFsdWF0aW9uU3RhY2subGVuZ3RoID4gMSkge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ01pc3Npbmcgb3BlcmF0b3InKTtcblx0XHR9XG5cblx0XHRjb25zdCByZWR1Y3Rpb24gPSBldmFsdWF0aW9uU3RhY2tbMF07XG5cdFx0Y29uc3QgcmVzdWx0ID0gcm91bmQocmVkdWN0aW9uLCA4KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRldmFsdWF0ZShzdHJpbmcpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgaW5maXhFeHByZXNzaW9uID0gdGhpcy5wYXJzZShzdHJpbmcpO1xuXHRcdFx0Y29uc3QgcG9zdGZpeEV4cHJlc3Npb24gPSB0aGlzLmNvbnZlcnQoaW5maXhFeHByZXNzaW9uKTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMucmVzb2x2ZShwb3N0Zml4RXhwcmVzc2lvbik7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBDb25zdGFudCBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBFdmFsdWF0b3IgZnJvbSAnLi9ldmFsdWF0b3InO1xuaW1wb3J0IE9wZXJhdG9yIGZyb20gJy4vb3BlcmF0b3InO1xuXG5leHBvcnQge0NvbnN0YW50LCBFdmFsdWF0b3IsIE9wZXJhdG9yfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZXJhdG9yIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJlY2VkZW5jZSwgYXNzb2NpYXRpdml0eSwgbWV0aG9kKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuXHRcdHRoaXMuYXNzb2NpYXRpdml0eSA9IGFzc29jaWF0aXZpdHk7XG5cdFx0dGhpcy5tZXRob2QgPSBtZXRob2Q7XG5cdH1cblxuXHRoYXNFcXVhbFByZWNlZGVuY2Uob3BlcmF0b3IpIHtcblx0XHRyZXR1cm4gdGhpcy5wcmVjZWRlbmNlID09PSBvcGVyYXRvci5wcmVjZWRlbmNlO1xuXHR9XG5cblx0aGFzR3JlYXRlclByZWNlZGVuY2Uob3BlcmF0b3IpIHtcblx0XHRyZXR1cm4gdGhpcy5wcmVjZWRlbmNlID4gb3BlcmF0b3IucHJlY2VkZW5jZTtcblx0fVxuXG5cdGlzTGVmdEFzc29jaWF0aXZlKCkge1xuXHRcdHJldHVybiB0aGlzLmFzc29jaWF0aXZpdHkgPT09ICdsZWZ0Jztcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==