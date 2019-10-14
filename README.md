# Evaluator.js

Evaluator.js is a small, zero-dependency module for evaluating mathematical expressions.

All major operations, constants, and methods are supported. Additionally, Evaluator.js intelligently reports invalid syntax, such as a misused operator, missing operand, or mismatched parentheses.

Evaluator.js is used by a desktop calculator application of the same name. See a [live demo](https://evaluator.link) on the website.

## Installation

```
npm install evaluator.js
```

## API

``` ts
/**
 * Takes a string and evaluates the result.
 *
 * @param {string} expression The string.
 *
 * @throws {Error} No input.
 * @throws {Error} No valid tokens.
 * @throws {Error} Misused operator: <token>.
 * @throws {Error} Mismatched parentheses.
 * @throws {Error} Invalid token: <token>.
 * @throws {Error} No operations.
 * @throws {Error} Insufficient arguments for method: <token>.
 * @throws {Error} Insufficient operands for operator: <token>.
 * @throws {Error} Division by zero.
 * @throws {Error} Insufficient operators.
 *
 * @returns {number} The result.
 */
export default function (expression: string): number;
```

## Examples

```js
import evaluate from 'evaluator.js';

evaluate('8 / (2 + 2.75)');    // 1.68421053
evaluate('pi / 1.3');          // 2.41660973
evaluate('sum(5, 10, 50, -5)') // 60
evaluate('194 % 5');           // 4
evaluate('mean(12, 25, 1, 7)') // 11.25
evaluate('-8 - -3');           // -5
evaluate('acos(0)');           // 1.57079633
evaluate('((6 - 9) / 5) * 9'); // -5.4
evaluate('-e ^ -2');           // -0.13533528
```

## Reference

### Operators

- `+`
- `-`
- `*`
- `/`
- `^`
- `%`
- `(`
- `)`
- `,`

### Constants

- `E`
- `LN2`
- `LN10`
- `LOG2E`
- `LOG10E`
- `PHI`
- `PI`
- `SQRT1_2`
- `SQRT2`
- `TAU`

### Methods

- `ABS(x)`
- `ACOS(x)`
- `ACOSH(x)`
- `ADD(x, y)`
- `ASIN(x)`
- `ASINH(x)`
- `ATAN(x)`
- `ATANH(x)`
- `ATAN2(y, x)`
- `CBRT(x)`
- `CEIL(x)`
- `COS(x)`
- `COSH(x)`
- `DIVIDE(x, y)`
- `EXP(x)`
- `EXPM1(x)`
- `FLOOR(x)`
- `HYPOT(x[, y[, ...]])`
- `LOG(x)`
- `LOG1P(x)`
- `LOG10(x)`
- `LOG2(x)`
- `MAX(x[, y[, ...]])`
- `MEAN(x[, y[, ...]])`
- `MIN(x[, y[, ...]])`
- `MOD(x, y)`
- `MULTIPLY(x, y)`
- `POW(x, y)`
- `SIN(x)`
- `SINH(x)`
- `SQRT(x)`
- `SUBTRACT(x, y)`
- `SUM(x[, y[, ...]])`
- `TAN(x)`
- `TANH(x)`
