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

- `+` - Add / Unary Plus
- `-` - Subtract / Unary Minus
- `*` - Multiply
- `/` - Divide
- `^` - Power
- `%` - Modulo
- `(` - Begin Group
- `)` - End Group
- `,` - Separate Argument

### Constants

- `E` - Euler's constant and the base of natural logarithms.
- `LN2` - Natural logarithm of 2.
- `LN10` - Natural logarithm of 10.
- `LOG2E` - Base 2 logarithm of E.
- `LOG10E` - Base 10 logarithm of E.
- `PHI` - Golden ratio.
- `PI` - Ratio of the circumference of a circle to its diameter.
- `SQRT1_2` - Square root of 1/2.
- `SQRT2` - Square root of 2.
- `TAU` - Ratio of the circumference of a circle to its radius.

### Methods

- `ABS(x)` - Returns the absolute value of a number.
- `ACOS(x)` - Returns the arccosine of a number.
- `ACOSH(x)` - Returns the hyperbolic arccosine of a number.
- `ADD(x, y)` - Returns the total of two numbers.
- `ASIN(x)` - Returns the arcsine of a number.
- `ASINH(x)` - Returns the hyperbolic arcsine of a number.
- `ATAN(x)` - Returns the arctangent of a number.
- `ATANH(x)` - Returns the hyperbolic arctangent of a number.
- `ATAN2(y, x)` - Returns the arctangent of the quotient of the arguments.
- `CBRT(x)` - Returns the cube root of a number.
- `CEIL(x)` - Returns the smallest integer greater than or equal to a number.
- `COS(x)` - Returns the cosine of a number.
- `COSH(x)` - Returns the hyperbolic cosine of a number.
- `DIVIDE(x, y)` - Returns the quotient of two numbers.
- `EXP(x)` - Returns E to the power of x.
- `EXPM1(x)` - Returns subtracting 1 from EXP(x).
- `FACTORIAL(x)` - Returns the factorial of x.
- `FLOOR(x)` - Returns the largest integer less than or equal to a number.
- `HYPOT(x[, y[, ...]])` - Returns the square root of the sum of squares of the arguments.
- `LOG(x)` - Returns the natural logarithm of a number.
- `LOG1P(x)` - Returns the natural logarithm of 1 + x.
- `LOG10(x)` - Returns the base 10 logarithm of a number.
- `LOG2(x)` - Returns the base 2 logarithm of a number.
- `MAX(x[, y[, ...]])` - Returns the largest of one or more numbers.
- `MEAN(x[, y[, ...]])` - Returns the mean of one or more numbers.
- `MIN(x[, y[, ...]])` - Returns the smallest of one or more numbers.
- `MOD(x, y)` - Returns the modulus of two numbers.
- `MULTIPLY(x, y)` - Returns the product of two numbers.
- `POW(x, y)` - Returns base to the exponent power.
- `SIN(x)` - Returns the sine of a number.
- `SINH(x)` - Returns the hyperbolic sine of a number.
- `SQRT(x)` - Returns the positive square root of a number.
- `SUBTRACT(x, y)` - Returns the difference of two numbers.
- `SUM(x[, y[, ...]])` - Returns the sum of one or more numbers.
- `TAN(x)` - Returns the tangent of a number.
- `TANH(x)` - Returns the hyperbolic tangent of a number.
