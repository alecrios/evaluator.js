const rewire = require('rewire');
const { expect } = require('chai');
const evaluator = rewire('../dist/evaluator');

const parse = evaluator.__get__('parse');
const convert = evaluator.__get__('convert');
const resolve = evaluator.__get__('resolve');

describe('Evaluator.parse()', () => {
	it('throw error for empty string', () => {
		expect(() => parse('')).to.throw(Error, 'No input');
	});

	it('return empty array for string with only whitespace', () => {
		expect(parse(' 	')).to.eql([]);
	});

	it('ignore whitespace characters', () => {
		expect(parse('0 0	0  0		0')).to.eql(['0', '0', '0', '0', '0']);
	});

	it('identify single-digit numbers', () => {
		expect(parse('0 1 2 3 4 5 6 7 8 9')).to.eql(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
	});

	it('identify multiple-digit numbers', () => {
		expect(parse('10 100 1000 10000')).to.eql(['10', '100', '1000', '10000']);
	});

	it('identify decimal numbers', () => {
		expect(parse('.0 0. 0.0 0.00 00.0 00.00')).to.eql(['.0', '0.', '0.0', '0.00', '00.0', '00.00']);
	});

	it('identify symbols', () => {
		expect(parse('`~!@#$%^&*()-=_+[]{};\':",.<>/?\\|')).to.eql(['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '[', ']', '{', '}', ';', '\'', ':', '"', ',', '.', '<', '>', '/', '?', '\\', '|']);
	});

	it('identify words', () => {
		expect(parse('a A aa AA aA Aa')).to.eql(['A', 'A', 'AA', 'AA', 'AA', 'AA']);
	});

	it('distinguish numbers from symbols with whitespace', () => {
		expect(parse('0 + 12 - .3 * 4. / 5.6 % 7.89 ^ 01.2 + ( 34.56 )')).to.eql(['0', '+', '12', '-', '.3', '*', '4.', '/', '5.6', '%', '7.89', '^', '01.2', '+', '(', '34.56', ')']);
	});

	it('distinguish numbers from symbols without whitespace', () => {
		expect(parse('0+12-.3*4./5.6%7.89^01.2+(34.56)')).to.eql(['0', '+', '12', '-', '.3', '*', '4.', '/', '5.6', '%', '7.89', '^', '01.2', '+', '(', '34.56', ')']);
	});

	it('distinguish symbols from words with whitespace', () => {
		expect(parse('a + Bc - DeF * gHiJ / kLmNo % PqRsTu ^ VwXyZaB + ( cDeFgHiJ )')).to.eql(['A', '+', 'BC', '-', 'DEF', '*', 'GHIJ', '/', 'KLMNO', '%', 'PQRSTU', '^', 'VWXYZAB', '+', '(', 'CDEFGHIJ', ')']);
	});

	it('distinguish symbols from words without whitespace', () => {
		expect(parse('a+Bc-DeF*gHiJ/kLmNo%PqRsTu^VwXyZaB+(cDeFgHiJ)')).to.eql(['A', '+', 'BC', '-', 'DEF', '*', 'GHIJ', '/', 'KLMNO', '%', 'PQRSTU', '^', 'VWXYZAB', '+', '(', 'CDEFGHIJ', ')']);
	});

	it('distinguish words from numbers with whitespace', () => {
		expect(parse('a 0 Bc 12 DeF .3 gHiJ 4. kLmNo 5.6 PqRsTu 7.89 VwXyZaB 01.2 cDeFgHiJ 45.67')).to.eql(['A', '0', 'BC', '12', 'DEF', '.3', 'GHIJ', '4.', 'KLMNO', '5.6', 'PQRSTU', '7.89', 'VWXYZAB', '01.2', 'CDEFGHIJ', '45.67']);
	});

	it('distinguish words from numbers without whitespace', () => {
		expect(parse('a0Bc12DeF.3gHiJ4.kLmNo5.6PqRsTu7.89VwXyZaB01.2cDeFgHiJ45.67')).to.eql(['A', '0', 'BC', '12', 'DEF', '.3', 'GHIJ', '4.', 'KLMNO', '5.6', 'PQRSTU', '7.89', 'VWXYZAB', '01.2', 'CDEFGHIJ', '45.67']);
	});
});

describe('Evaluator.convert()', () => {
	it('throw error for empty tokens array', () => {
		expect(() => convert([])).to.throw(Error, 'No valid tokens');
	});

	it('throw error for a misused operator', () => {
		expect(() => convert(['^'])).to.throw(Error, 'Misused operator: ^');
		expect(() => convert(['*'])).to.throw(Error, 'Misused operator: *');
		expect(() => convert(['/'])).to.throw(Error, 'Misused operator: /');
		expect(() => convert(['%'])).to.throw(Error, 'Misused operator: %');
		expect(() => convert(['2', '-', '^'])).to.throw(Error, 'Misused operator: ^');
		expect(() => convert(['2', '-', '*'])).to.throw(Error, 'Misused operator: *');
		expect(() => convert(['2', '-', '/'])).to.throw(Error, 'Misused operator: /');
		expect(() => convert(['2', '-', '%'])).to.throw(Error, 'Misused operator: %');
	});

	it('throw error for an invalid token', () => {
		expect(() => convert(['~'])).to.throw(Error, 'Invalid token: ~');
		expect(() => convert(['.'])).to.throw(Error, 'Invalid token: .');
		expect(() => convert(['ABC'])).to.throw(Error, 'Invalid token: ABC');
		expect(() => convert(['191', '3', '&'])).to.throw(Error, 'Invalid token: &');
		expect(() => convert(['33', '#', '-', '12'])).to.throw(Error, 'Invalid token: #');
		expect(() => convert(['41', ',', '000'])).to.throw(Error, 'Invalid token: ,');
		expect(() => convert(['19.12', '-', '2', '_', '11'])).to.throw(Error, 'Invalid token: _');
		expect(() => convert(['2', '+', 'XYZ'])).to.throw(Error, 'Invalid token: XYZ');
	});

	it('throw error for mismatched parentheses', () => {
		expect(() => convert(['('])).to.throw(Error, 'Mismatched parentheses');
		expect(() => convert(['(', '('])).to.throw(Error, 'Mismatched parentheses');
		expect(() => convert([')'])).to.throw(Error, 'Mismatched parentheses');
		expect(() => convert([')', ')'])).to.throw(Error, 'Mismatched parentheses');
		expect(() => convert(['4', '+', '(', '3'])).to.throw(Error, 'Mismatched parentheses');
		expect(() => convert(['4', '+', '(', '3', ')', ')'])).to.throw(Error, 'Mismatched parentheses');
		expect(() => convert(['2', '*', '3', '('])).to.throw(Error, 'Mismatched parentheses');
		expect(() => convert(['(', '4', '-', '1', ')', ')'])).to.throw(Error, 'Mismatched parentheses');
	});

	it('process numbers', () => {
		expect(convert(['3'])).to.eql([3]);
		expect(convert(['42', '144.90', '8'])).to.eql([42, 144.9, 8]);
		expect(convert(['10', '1', '01', '001', '0.01', '0.001'])).to.eql([10, 1, 1, 1, 0.01, 0.001]);
		expect(convert(['01.', '0.2', '3.4', '.01', '.003', '0.01', '.223', '0001'])).to.eql([1, 0.2, 3.4, 0.01, 0.003, 0.01, 0.223, 1]);
		expect(convert(['0', '12', '.3', '4.', '5.6', '7.89', '01.2', '34.56'])).to.eql([0, 12, 0.3, 4, 5.6, 7.89, 1.2, 34.56]);
		expect(convert(['0', '00', '000', '1', '11', '111'])).to.eql([0, 0, 0, 1, 11, 111]);
		expect(convert(['.01', '.001', '.0001'])).to.eql([0.01, 0.001, 0.0001]);
		expect(convert(['1000', '10000'])).to.eql([1000, 10000]);
	});

	it('process constants', () => {
		expect(convert(['PI'])).to.eql(['PI']);
		expect(convert(['E'])).to.eql(['E']);
		expect(convert(['PI', 'E'])).to.eql(['PI', 'E']);
		expect(convert(['E', 'PI'])).to.eql(['E', 'PI']);
	});

	it('process infix operators', () => {
		expect(convert(['32', '^', '10'])).to.eql([32, 10, 'EXP']);
		expect(convert(['21', '*', '7'])).to.eql([21, 7, 'MUL']);
		expect(convert(['8', '/', '2'])).to.eql([8, 2, 'DIV']);
		expect(convert(['903', '%', '7'])).to.eql([903, 7, 'MOD']);
		expect(convert(['5', '+', '54'])).to.eql([5, 54, 'ADD']);
		expect(convert(['40', '-', '0'])).to.eql([40, 0, 'SUB']);
		expect(convert(['1', '+', '15', '/', '2'])).to.eql([1, 15, 2, 'DIV', 'ADD']);
		expect(convert(['23', '*', '3', '-', '212'])).to.eql([23, 3, 'MUL', 212, 'SUB']);
	});

	it('process prefix operators', () => {
		expect(convert(['+'])).to.eql(['POS']);
		expect(convert(['+', '2'])).to.eql([2, 'POS']);
		expect(convert(['3', '-', '+', '2'])).to.eql([3, 2, 'POS', 'SUB']);
		expect(convert(['2', '-', '+', '+', '2'])).to.eql([2, 2, 'POS', 'POS', 'SUB']);
		expect(convert(['-'])).to.eql(['NEG']);
		expect(convert(['-', '4'])).to.eql([4, 'NEG']);
		expect(convert(['1', '+', '-', '7'])).to.eql([1, 7, 'NEG', 'ADD']);
		expect(convert(['5', '+', '-', '-', '0'])).to.eql([5, 0, 'NEG', 'NEG', 'ADD']);
	});
});

describe('Evaluator.resolve()', () => {
	it('throw error for empty rpn array', () => {
		expect(() => resolve([])).to.throw(Error, 'No operations');
	});

	it('throw error for missing operands', () => {
		expect(() => resolve([2, 'EXP'])).to.throw(Error, 'Missing operand');
		expect(() => resolve([41, 'MUL'])).to.throw(Error, 'Missing operand');
		expect(() => resolve([1.7, 'DIV'])).to.throw(Error, 'Missing operand');
		expect(() => resolve([7, 'MOD'])).to.throw(Error, 'Missing operand');
		expect(() => resolve([3, 'ADD'])).to.throw(Error, 'Missing operand');
		expect(() => resolve([13, 'SUB'])).to.throw(Error, 'Missing operand');
		expect(() => resolve([3, 4, 'SUB', 'EXP'])).to.throw(Error, 'Missing operand');
		expect(() => resolve([13, 76, 'EXP', 'MUL'])).to.throw(Error, 'Missing operand');
		expect(() => resolve([0, 215, 'ADD', 'DIV'])).to.throw(Error, 'Missing operand');
		expect(() => resolve([43, 4, 'ADD', 'MOD'])).to.throw(Error, 'Missing operand');
		expect(() => resolve([67, 1, 'MOD', 'ADD'])).to.throw(Error, 'Missing operand');
		expect(() => resolve([7, 79, 'MUL', 'SUB'])).to.throw(Error, 'Missing operand');
	});

	it('throw error for missing operators', () => {
		expect(() => resolve([2, 4])).to.throw(Error, 'Missing operator');
		expect(() => resolve([5, 87, 12])).to.throw(Error, 'Missing operator');
		expect(() => resolve([1, 2, 2, 'DIV'])).to.throw(Error, 'Missing operator');
		expect(() => resolve([7, 1, 2, 'EXP'])).to.throw(Error, 'Missing operator');
	});

	it('throw error for division by zero', () => {
		expect(() => resolve([1, 0, 'DIV'])).to.throw(Error, 'Division by zero');
		expect(() => resolve([3, 7, 'ADD', 0, 'DIV'])).to.throw(Error, 'Division by zero');
	});

	it('return result for rpn with single operation', () => {
		expect(resolve([2, 3, 'EXP'])).to.eql(8);
		expect(resolve([7, 6, 'MUL'])).to.eql(42);
		expect(resolve([16, 4, 'DIV'])).to.eql(4);
		expect(resolve([4, 5, 'ADD'])).to.eql(9);
		expect(resolve([1, 5, 'SUB'])).to.eql(-4);
		expect(resolve([7, 'NEG'])).to.eql(-7);
		expect(resolve([6, 'POS'])).to.eql(6);
	});

	it('return result for rpn with multiple operations', () => {
		expect(resolve([7, 3, 2, 'ADD', 'MUL'])).to.eql(35);
		expect(resolve([3, 'NEG', 9, 'NEG', 'SUB'])).to.eql(6);
		expect(resolve([5, 8, 'MUL', 6, 'ADD'])).to.eql(46);
		expect(resolve([3, 3, 'EXP', 'NEG'])).to.eql(-27);
		expect(resolve([16, 'NEG', 9, 'POS', 'POS', 'POS', 'ADD'])).to.eql(-7);
		expect(resolve([2, 4, 5, 'EXP', 'MUL', 3, 'ADD'])).to.eql(2051);
		expect(resolve([3, 12, 4, 'DIV', 'DIV', 5, 'MUL', 1, 'DIV'])).to.eql(5);
		expect(resolve([10, 4, 'MOD', 8, 'ADD'])).to.eql(10);
	});
});

describe('Evaluator.evaluate()', () => {
	const tests = [
		{ string: '3', result: 3 },
		{ string: '1 * 1', result: 1 },
		{ string: '562370', result: 562370 },
		{ string: '2 + 3', result: 5 },
		{ string: '937 - 264', result: 673 },
		{ string: '492 + 117', result: 609 },
		{ string: '9 * 5 + 7', result: 52 },
		{ string: '4 + 1 * 8', result: 12 },
		{ string: '2 / 3', result: 0.66666667 },
		{ string: '0 / 5', result: 0 },
		{ string: '8 * (2 + 1)', result: 24 },
		{ string: '2 + (3 * 6) - 4', result: 16 },
		{ string: '7 - 1 + 6', result: 12 },
		{ string: '83 - 0 + 8', result: 91 },
		{ string: '2 ^ 5', result: 32 },
		{ string: '4 ^ 0', result: 1 },
		{ string: '0 ^ 32', result: 0 },
		{ string: '3 * 8 ^ 9 + 3', result: 402653187 },
		{ string: '2 ^ 2 ^ 2 ^ 2', result: 65536 },
		{ string: '1 + 2 ^ -3 * 4 / 5', result: 1.1 },
		{ string: '712 * 2 ^ 3 + 40', result: 5736 },
		{ string: '1 * (7 + 8 * 4) + 8', result: 47 },
		{ string: '655 * (1 + 3 * 53) + 4', result: 104804 },
		{ string: '3 + 4 * (2 - 1)', result: 7 },
		{ string: '141 + 3 * (231 - 198)', result: 240 },
		{ string: '55+ 13*( 6-0 )', result: 133 },
		{ string: '3 + 4 * 2 / (1 - 0) ^ 2 ^ 2', result: 11 },
		{ string: '4 + 8 / (9 - 32)', result: 3.65217391 },
		{ string: '0 + 241 / (643 - 501)', result: 1.6971831 },
		{ string: '3.3 ^ (1.7 / 2.3) / 12.1 * 105.6', result: 21.09249631 },
		{ string: '128.4383', result: 128.4383 },
		{ string: '11.10 + 17.50', result: 28.6 },
		{ string: '34.1 + 12.98 * 8.003', result: 137.97894 },
		{ string: '0.25 * 2 ^ 3 + 2.500', result: 4.5 },
		{ string: '.125 - .0625 + .500', result: 0.5625 },
		{ string: '0.419 - 0.001', result: 0.418 },
		{ string: '12.5 * (21.1154 + 1.0)', result: 276.4425 },
		{ string: '-12', result: -12 },
		{ string: '3 + -6', result: -3 },
		{ string: '-5 - -7', result: 2 },
		{ string: '4 ^ - 2', result: 0.0625 },
		{ string: '-4 ^ -3', result: -0.015625 },
		{ string: '-4 ^ 2', result: -16 },
		{ string: '1 ^ -2 - -7 - 9 + -2', result: -3 },
		{ string: '2 / (30 / 3) * 4 / 1', result: 0.8 },
		{ string: '7---15+3-9', result: -14 },
		{ string: '12 % 5', result: 2 },
		{ string: '92 % 5 + 12', result: 14 },
		{ string: '2 + 12 % (9 - 4)', result: 4 },
		{ string: '12 % 20 ^ 3 + 50', result: 62 },
		{ string: '23 - - - - - 60', result: -37 },
		{ string: '-1 + -2 ^ 3 + 1', result: -8 },
		{ string: '+12', result: 12 },
		{ string: '3 + +10', result: 13 },
		{ string: '-17 + + + + 10', result: -7 },
		{ string: '10 - +4', result: 6 },
		{ string: '4 + 8 / (16 * (2 + 2))', result: 4.125 },
		{ string: '(100 / (4 - 2) * ((6) + 2))', result: 400 },
		{ string: '.5 + 2.5 - 0.5 / (8 / 2)', result: 2.875 },
		{ string: '4^-3 + 40 / 16', result: 2.515625 },
		{ string: '00.001 * 3000 / .2', result: 15 },
		{ string: '4. + 1.6 - 2.24 + 07.4 - 19.53', result: -8.77 },
		{ string: '-4 - -6 - -2 - 3', result: 1 },
		{ string: '3 + +4 - +2 + 3 + +1', result: 9 },
		{ string: '- 4 + 6', result: 2 },
		{ string: '+ 4 - 6', result: -2 },
		{ string: '7 * (-4)', result: -28 },
		{ string: '.1 + .2', result: 0.3 },
		{ string: '24.1 * 510.51 / 4.29 * (18.3 / 16.98)', result: 3090.84628975 },
		{ string: '1.43 / 566.32 * (232.1 / 10.98)', result: 0.05337611 },
		{ string: '3.34 ^ (18.221 / 2.9551)', result: 1695.87848994 },
		{ string: '(1.89 + 0.13 * 17.44) / (3 ^ 2)', result: 0.46191111 },
		{ string: '-15.4 / (4.99) * 1 ^ 3', result: -3.08617234 },
		{ string: '401.2 + 108.1', result: 509.3 },
		{ string: '2 / 4 % 8 * 3', result: 1.5 },
		{ string: '4.1 * 18.2 + (12.8 / 16.3)', result: 75.40527607 },
		{ string: '.211 * 0.343 * 00.984 * 4.', result: 0.28486013 },
		{ string: '(4 ^ 4) / 3 % 2', result: 1.33333333 },
		{ string: 'pi', result: 3.14159265 },
		{ string: '2 * PI * 10', result: 62.83185307 },
		{ string: 'PI * 10 ^ 2', result: 314.15926536 },
		{ string: 'e', result: 2.71828183 },
		{ string: 'E * 4.31 / 1.2', result: 9.76316223 },
		{ string: '(9.121 - E) * 1.981', result: 12.6837847 },
		{ string: 'pi * 4 / e + 2', result: 6.6229094 },
		{ string: '41 * pi / (18 ^ 2) - 11.213', result: -10.81545278 },
		{ string: '(pi) + (e) - (12)', result: -6.14012552 },
		{ string: '(((pi + e)))', result: 5.85987448 },
		{ string: '-pi-e--pi--e', result: 0 },
	];

	tests.forEach((test) => {
		it(`${test.string} = ${test.result}`, () => {
			expect(evaluator(test.string)).to.eql(test.result);
		});
	});
});
