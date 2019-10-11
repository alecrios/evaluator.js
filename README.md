# Evaluator

Evaluator is a small, zero-dependency library for evaluating mathematical expressions. Given an expression written in infix notation, Evaluator will parse the string, convert the expression to postfix notation, then resolve the result. All major operators and constants are supported.

Example: the expression `6 + (8 / 4) ^ 2 + pi` will yield `13.14159265`.

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
import evaluator from 'evaluator.js';

evaluator('4 + 2 * 8');         // 20
evaluator('8 / (2 + 2.75)');    // 1.68421053
evaluator('194 % 5');           // 4
evaluator('8 ^ 2 / 0.5');       // 128
evaluator('pi / 1.3');          // 2.41660973
evaluator('-8 - -3');           // -5
evaluator('((6 - 9) / 5) * 9'); // -5.4
evaluator('-e ^ -2');           // -0.13533528
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
