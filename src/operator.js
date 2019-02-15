export default class Operator {
	constructor(name, precedence, associativity, method) {
		this.name = name;
		this.precedence = precedence;
		this.associativity = associativity;
		this.method = method;
	}

	hasEqualPrecedence(operator) {
		return this.precedence === operator.precedence;
	}

	hasGreaterPrecedence(operator) {
		return this.precedence > operator.precedence;
	}

	isLeftAssociative() {
		return this.associativity === 'left';
	}
}
