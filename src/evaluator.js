import round from 'lodash.round';
import Constant from './constant';
import Operator from './operator';

export default class Evaluator {
	constructor() {
		this.symbols = {
			'^': {infix: 'EXP'},
			'*': {infix: 'MUL'},
			'/': {infix: 'DIV'},
			'%': {infix: 'MOD'},
			'+': {infix: 'ADD', prefix: 'POS'},
			'-': {infix: 'SUB', prefix: 'NEG'},
		};

		this.operators = {
			'EXP': new Operator('EXP', 4, 'right', (a, b) => a ** b),
			'POS': new Operator('POS', 3, 'right', (a) => a),
			'NEG': new Operator('NEG', 3, 'right', (a) => -a),
			'MUL': new Operator('MUL', 2, 'left', (a, b) => a * b),
			'DIV': new Operator('DIV', 2, 'left', (a, b) => a / b),
			'MOD': new Operator('MOD', 2, 'left', (a, b) => a % b),
			'ADD': new Operator('ADD', 1, 'left', (a, b) => a + b),
			'SUB': new Operator('SUB', 1, 'left', (a, b) => a - b),
		};

		this.constants = {
			'E': new Constant('E', Math.E),
			'PI': new Constant('PI', Math.PI),
		};

		this.numbers = /(\d+\.\d*)|(\d*\.\d+)|(\d+)/;

		this.openParenthesis = '(';

		this.closeParenthesis = ')';

		this.whitespace = /\s/;
	}

	isSymbol(token) {
		return Object.prototype.hasOwnProperty.call(this.symbols, token);
	}

	isOperator(token) {
		return Object.prototype.hasOwnProperty.call(this.operators, token);
	}

	isConstant(token) {
		return Object.prototype.hasOwnProperty.call(this.constants, token);
	}

	isNumber(token) {
		return this.numbers.test(token);
	}

	isOpenParenthesis(token) {
		return token === this.openParenthesis;
	}

	isCloseParenthesis(token) {
		return token === this.closeParenthesis;
	}

	isWhitespace(token) {
		return this.whitespace.test(token);
	}

	topOperatorHasPrecedence(operatorStack, currentOperator) {
		if (!operatorStack.length) return false;

		const topToken = operatorStack[operatorStack.length - 1];

		if (!this.isOperator(topToken)) return false;

		const topOperator = this.operators[topToken];

		if (currentOperator.method.length === 1 && topOperator.method.length > 1) return false;

		return (
			topOperator.hasGreaterPrecedence(currentOperator)
			|| (topOperator.hasEqualPrecedence(currentOperator) && topOperator.isLeftAssociative())
		);
	}

	determineOperator(token, previousToken) {
		let notation;

		if (
			previousToken === undefined
			|| this.isOpenParenthesis(previousToken)
			|| this.isSymbol(previousToken)
		) {
			notation = 'prefix';
		} else if (
			this.isCloseParenthesis(previousToken)
			|| (this.isNumber(previousToken)
			|| this.isConstant(previousToken))
		) {
			notation = 'infix';
		}

		return this.operators[this.symbols[token][notation]];
	}

	parse(string) {
		if (!string.length) {
			throw Error('No input');
		}

		const pattern = /(\d+\.\d*)|(\d*\.\d+)|(\d+)|([a-zA-Z]+)|(.)/g;
		const infixExpression = (string.match(pattern) || [])
			.filter((token) => !this.isWhitespace(token))
			.map((token) => token.toUpperCase());

		return infixExpression;
	}

	convert(infixExpression) {
		if (!infixExpression.length) {
			throw Error('No valid tokens');
		}

		const operatorStack = [];
		const postfixExpression = [];

		infixExpression.forEach((token, index) => {
			if (this.isNumber(token)) {
				postfixExpression.push(parseFloat(token));
				return;
			}

			if (this.isConstant(token)) {
				postfixExpression.push(this.constants[token].name);
				return;
			}

			if (this.isSymbol(token)) {
				const operator = this.determineOperator(token, infixExpression[index - 1]);

				if (operator === undefined) {
					throw Error(`Misused operator: ${token}`);
				}

				while (this.topOperatorHasPrecedence(operatorStack, operator)) {
					postfixExpression.push(operatorStack.pop());
				}

				operatorStack.push(operator.name);
				return;
			}

			if (this.isOpenParenthesis(token)) {
				operatorStack.push(token);
				return;
			}

			if (this.isCloseParenthesis(token)) {
				while (!this.isOpenParenthesis(operatorStack[operatorStack.length - 1])) {
					if (!operatorStack.length) {
						throw Error('Mismatched parentheses');
					}

					postfixExpression.push(operatorStack.pop());
				}

				operatorStack.pop();
				return;
			}

			throw Error(`Invalid token: ${token}`);
		});

		while (operatorStack.length) {
			const operator = operatorStack[operatorStack.length - 1];

			if (this.isOpenParenthesis(operator) || this.isCloseParenthesis(operator)) {
				throw Error('Mismatched parentheses');
			}

			postfixExpression.push(operatorStack.pop());
		}

		return postfixExpression;
	}

	resolve(postfixExpression) {
		if (!postfixExpression.length) {
			throw Error('No operations');
		}

		const evaluationStack = [];

		postfixExpression.forEach((token) => {
			if (this.isNumber(token)) {
				evaluationStack.push(token);
				return;
			}

			if (this.isConstant(token)) {
				evaluationStack.push(this.constants[token].value);
				return;
			}

			const operator = this.operators[token];

			if (evaluationStack.length < operator.method.length) {
				throw Error('Missing operand');
			}

			if (operator.name === 'DIV' && evaluationStack[1] === 0) {
				throw Error('Division by zero');
			}

			const result = operator.method(...evaluationStack.splice(-operator.method.length));
			evaluationStack.push(result);
		});

		if (evaluationStack.length > 1) {
			throw Error('Missing operator');
		}

		const reduction = evaluationStack[0];
		const result = round(reduction, 8);

		return result;
	}

	evaluate(string) {
		try {
			const infixExpression = this.parse(string);
			const postfixExpression = this.convert(infixExpression);
			const result = this.resolve(postfixExpression);
			return result;
		} catch (error) {
			throw error;
		}
	}
}
