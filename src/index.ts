import { symbols, operators, constants, methods } from './config';

const isSymbol = (token: string): boolean => Object.keys(symbols).includes(token);
const isOperator = (token: string): boolean => Object.keys(operators).includes(token);
const isMethod = (token: string): boolean => Object.keys(methods).includes(token);
const isConstant = (token: string): boolean => Object.keys(constants).includes(token);
const isNumber = (token: string): boolean => /(\d+\.\d*)|(\d*\.\d+)|(\d+)/.test(token);
const isOpenParenthesis = (token: string): boolean => /\(/.test(token);
const isCloseParenthesis = (token: string): boolean => /\)/.test(token);
const isComma = (token: string): boolean => /,/.test(token);
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
	if (
		previousToken === undefined
		|| isOpenParenthesis(previousToken)
		|| isSymbol(previousToken)
		|| isComma(previousToken)
	) {
		return symbols[token].prefix;
	}

	if (
		isCloseParenthesis(previousToken)
		|| (isNumber(previousToken)
		|| isConstant(previousToken))
	) {
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

	const pattern = /(\d+\.\d*)|(\d*\.\d+)|(\d+)|([a-zA-Z0-9_]+)|(.)/g;

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
 * @throws {Error} Insufficient arguments for method: <token>.
 *
 * @returns {string[]} The array of tokens in postfix notation.
 */
function convert(infixExpression: string[]): string[] {
	if (!infixExpression.length) {
		throw Error('No valid tokens');
	}

	const operatorStack = [];
	const arityStack = [];
	const postfixExpression = [];
	let methodIsNewlyDeclared = false;

	infixExpression.forEach((token, index) => {
		if (methodIsNewlyDeclared && !isOpenParenthesis(token)) {
			throw Error(`Misused method: ${operatorStack[operatorStack.length - 1]}`);
		}

		methodIsNewlyDeclared = false;

		if (isMethod(token)) {
			methodIsNewlyDeclared = true;
			operatorStack.push(token);
			arityStack.push(1);
			return;
		}

		if (isConstant(token)) {
			postfixExpression.push(token);
			return;
		}

		if (isNumber(token)) {
			postfixExpression.push(parseFloat(token));
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

		if (isComma(token)) {
			arityStack[arityStack.length - 1] += 1;

			while (!isOpenParenthesis(operatorStack[operatorStack.length - 1])) {
				if (!operatorStack.length) {
					throw Error('Invalid token: ,');
				}

				postfixExpression.push(operatorStack.pop());
			}

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

			if (isMethod(operatorStack[operatorStack.length - 1])) {
				const method = operatorStack[operatorStack.length - 1];
				const argumentCount = arityStack.pop();

				if (argumentCount < methods[method].length) {
					throw Error(`Insufficient arguments for method: ${method}`);
				}

				postfixExpression.push(`${operatorStack.pop()}:${argumentCount}`);
			}

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
 * @throws {Error} Insufficient arguments for method: <token>.
 * @throws {Error} Insufficient operands for operator: <token>.
 * @throws {Error} Division by zero.
 * @throws {Error} Insufficient operators.
 *
 * @returns {number} The result.
 */
function resolve(postfixExpression: string[]): number {
	if (!postfixExpression.length) {
		throw Error('No operations');
	}

	const evaluationStack = [];

	postfixExpression.forEach((token) => {
		if (isMethod(String(token).split(':')[0])) {
			const [methodName, argumentCount] = token.split(':');
			const method = methods[methodName];
			const isVariadic = method.length === 0;
			const requiredArguments = isVariadic ? 1 : method.length;

			if (evaluationStack.length < requiredArguments) {
				throw Error(`Insufficient arguments for method: ${token}`);
			}

			const result = method(...evaluationStack.splice(isVariadic ? -argumentCount : -method.length));
			evaluationStack.push(result);
			return;
		}

		if (isConstant(token)) {
			evaluationStack.push(constants[token]);
			return;
		}

		if (isNumber(token)) {
			evaluationStack.push(token);
			return;
		}

		const operator = operators[token];

		if (evaluationStack.length < operator.method.length) {
			throw Error(`Insufficient operands for operator: ${operator.name}`);
		}

		if (token === '_DIV' && evaluationStack[1] === 0) {
			throw Error('Division by zero');
		}

		const result = operator.method(...evaluationStack.splice(-operator.method.length));
		evaluationStack.push(result);
	});

	if (evaluationStack.length > 1) {
		throw Error('Insufficient operators');
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
 * @throws {Error} Insufficient arguments for method: <token>.
 * @throws {Error} Insufficient operands for operator: <token>.
 * @throws {Error} Division by zero.
 * @throws {Error} Insufficient operators.
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
