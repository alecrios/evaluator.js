# evaluator.js

Evaluator is built for evaluating mathematical expressions. Given an expression written in infix notation, Evaluator will parse the string to identify the valid tokens, convert the expression to postfix notation, then resolve the result.

## Installation

```
npm install evaluator.js --save
```

## Usage

### Evaluator.evaluate()

```js
Evaluator.evaluate(expression)
```

Evaluates an expression.

#### Arguments

**expression (_String_)**: The expression to evaluate.

#### Returns

**(_String_)**: The result of the expression.

#### Examples

```js
const evaluator = new Evaluator();

evaluator.evaluate('4 + 2 * 8');         // 20
evaluator.evaluate('8 / (2 + 2.75)');    // 1.68421053
evaluator.evaluate('194 % 5');           // 4
evaluator.evaluate('8 ^ 2 / 0.5');       // 128
evaluator.evaluate('pi / 1.3');          // 2.41660973
evaluator.evaluate('-8 - -3');           // -5
evaluator.evaluate('((6 - 9) / 5) * 9'); // -5.4
evaluator.evaluate('-e ^ -2');           // -0.13533528
```

## Reference

### Supported Operators

| Operator | Operation      |
|:-------- |:-------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `^`      | Exponentiation |
| `%`      | Modulo         |
| `(`, `)` | Grouping       |

### Supported Constants

| Constant | Value         |
|:-------- |:------------- |
| `e`      | 2.71828183... |
| `pi`     | 3.14159265... |
