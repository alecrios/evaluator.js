const symbols = {
	'^': { infix: 'EXP' },
	'*': { infix: 'MUL' },
	'/': { infix: 'DIV' },
	'%': { infix: 'MOD' },
	'+': { infix: 'ADD', prefix: 'POS' },
	'-': { infix: 'SUB', prefix: 'NEG' },
};

const operators = {
	'EXP': { precedence: 4, associativity: 'right', method: (a, b) => a ** b },
	'POS': { precedence: 3, associativity: 'right', method: (a) => a },
	'NEG': { precedence: 3, associativity: 'right', method: (a) => -a },
	'MUL': { precedence: 2, associativity: 'left', method: (a, b) => a * b },
	'DIV': { precedence: 2, associativity: 'left', method: (a, b) => a / b },
	'MOD': { precedence: 2, associativity: 'left', method: (a, b) => a % b },
	'ADD': { precedence: 1, associativity: 'left', method: (a, b) => a + b },
	'SUB': { precedence: 1, associativity: 'left', method: (a, b) => a - b },
};

const constants = {
	'E': Math.E,
	'PI': Math.PI,
};

const isSymbol = (token: string): boolean => Object.keys(symbols).includes(token);
const isOperator = (token: string): boolean => Object.keys(operators).includes(token);
const isConstant = (token: string): boolean => Object.keys(constants).includes(token);
const isNumber = (token: string): boolean => /(\d+\.\d*)|(\d*\.\d+)|(\d+)/.test(token);
const isOpenParenthesis = (token: string): boolean => /\(/.test(token);
const isCloseParenthesis = (token: string): boolean => /\)/.test(token);
const isWhitespace = (token: string): boolean => /\s/.test(token);

const round = (number: number, precision: number): number => {
	const modifier = 10 ** precision;

	return !modifier ? Math.round(number) : Math.round(number * modifier) / modifier;
};

function topOperatorHasPrecedence(operatorStack: string[], currentOperatorName: string): boolean {
	if (!operatorStack.length) return false;

	const topToken = operatorStack[operatorStack.length - 1];

	if (!isOperator(topToken)) return false;

	const topOperator = operators[topToken];
	const currentOperator = operators[currentOperatorName];

	if (currentOperator.method.length === 1 && topOperator.method.length > 1) return false;

	if (topOperator.precedence > currentOperator.precedence) return true;

	return topOperator.precedence === currentOperator.precedence && topOperator.associativity === 'left';
}

function determineOperator(token: string, previousToken: string): string {
	if (previousToken === undefined || isOpenParenthesis(previousToken) || isSymbol(previousToken)) {
		return symbols[token].prefix;
	}

	if (isCloseParenthesis(previousToken) || (isNumber(previousToken) || isConstant(previousToken))) {
		return symbols[token].infix;
	}

	return undefined;
}

/**
 * Takes a string and parses out the array of tokens in infix notation.
 *
 * @param {string} expression The string.
 *
 * @throws {Error} No input.
 *
 * @returns {string[]} The array of tokens in infix notation.
 */
function parse(expression: string): string[] {
	if (!expression.length) {
		throw Error('No input');
	}

	const pattern = /(\d+\.\d*)|(\d*\.\d+)|(\d+)|([a-zA-Z]+)|(.)/g;

	const infixExpression = (expression.match(pattern) || [])
		.filter((token) => !isWhitespace(token))
		.map((token) => token.toUpperCase());

	return infixExpression;
}

/**
 * Takes an array of tokens in infix notation and converts it to postfix notation.
 *
 * @param {string[]} infixExpression The array of tokens in infix notation.
 *
 * @throws {Error} No valid tokens.
 * @throws {Error} Misused operator: <token>.
 * @throws {Error} Mismatched parentheses.
 * @throws {Error} Invalid token: <token>.
 *
 * @returns {string[]} The array of tokens in postfix notation.
 */
function convert(infixExpression: string[]): string[] {
	if (!infixExpression.length) {
		throw Error('No valid tokens');
	}

	const operatorStack = [];
	const postfixExpression = [];

	infixExpression.forEach((token, index) => {
		if (isNumber(token)) {
			postfixExpression.push(parseFloat(token));
			return;
		}

		if (isConstant(token)) {
			postfixExpression.push(token);
			return;
		}

		if (isSymbol(token)) {
			const operatorName = determineOperator(token, infixExpression[index - 1]);
			const operator = operators[operatorName];

			if (operator === undefined) {
				throw Error(`Misused operator: ${token}`);
			}

			while (topOperatorHasPrecedence(operatorStack, operatorName)) {
				postfixExpression.push(operatorStack.pop());
			}

			operatorStack.push(operatorName);
			return;
		}

		if (isOpenParenthesis(token)) {
			operatorStack.push(token);
			return;
		}

		if (isCloseParenthesis(token)) {
			while (!isOpenParenthesis(operatorStack[operatorStack.length - 1])) {
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

		if (isOpenParenthesis(operator) || isCloseParenthesis(operator)) {
			throw Error('Mismatched parentheses');
		}

		postfixExpression.push(operatorStack.pop());
	}

	return postfixExpression;
}

/**
 * Takes an array of tokens in postfix notation and resolves the result.
 *
 * @param {string[]} postfixExpression The array of tokens in postfix notation.
 *
 * @throws {Error} No operations.
 * @throws {Error} Missing operand.
 * @throws {Error} Division by zero.
 * @throws {Error} Missing operator.
 *
 * @returns {number} The result.
 */
function resolve(postfixExpression: string[]): number {
	if (!postfixExpression.length) {
		throw Error('No operations');
	}

	const evaluationStack = [];

	postfixExpression.forEach((token) => {
		if (isNumber(token)) {
			evaluationStack.push(token);
			return;
		}

		if (isConstant(token)) {
			evaluationStack.push(constants[token]);
			return;
		}

		const operator = operators[token];

		if (evaluationStack.length < operator.method.length) {
			throw Error('Missing operand');
		}

		if (token === 'DIV' && evaluationStack[1] === 0) {
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
export default function (expression: string): number {
	try {
		const infixExpression = parse(expression);
		const postfixExpression = convert(infixExpression);
		const result = resolve(postfixExpression);
		return result;
	} catch (error) {
		throw error;
	}
}
