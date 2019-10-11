# Evaluator.js

Evaluator.js is a tiny (~2.6kB), zero-dependency module for evaluating mathematical expressions.

All major operations and constants are supported. For example, the expression `-6 + (8 / (4 * 10)) ^ 2 + pi` will yield `-2.81840735`. Additionally, Evaluator.js intelligently reports invalid syntax, such as a misused operator or a missing operand. For example, the expression `4 * (3 + 2) + 1)` will throw the error `Mismatched parenthesis`.

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
 * @throws {Error} Missing operand.
 * @throws {Error} Division by zero.
 * @throws {Error} Missing operator.
 *
 * @returns {number} The result.
 */
export default function (expression: string): number;
```

## Examples

```js
import evaluate from 'evaluator.js';

evaluate('4 + 2 * 8');         // 20
evaluate('8 / (2 + 2.75)');    // 1.68421053
evaluate('194 % 5');           // 4
evaluate('8 ^ 2 / 0.5');       // 128
evaluate('pi / 1.3');          // 2.41660973
evaluate('-8 - -3');           // -5
evaluate('((6 - 9) / 5) * 9'); // -5.4
evaluate('-e ^ -2');           // -0.13533528
```

## Reference

### Operators

| Operator | Operation      |
|:-------- |:-------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `^`      | Exponentiation |
| `%`      | Modulo         |
| `(`, `)` | Grouping       |

### Constants

| Constant | Value         |
|:-------- |:------------- |
| `e`      | 2.71828183... |
| `pi`     | 3.14159265... |
