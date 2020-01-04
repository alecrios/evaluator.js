const symbols = {
	'^': { infix: '_POW' },
	'*': { infix: '_MUL' },
	'/': { infix: '_DIV' },
	'%': { infix: '_MOD' },
	'+': { infix: '_ADD', prefix: '_POS' },
	'-': { infix: '_SUB', prefix: '_NEG' },
};

const factorial = (x) => (x >= 0) ? ((x < 2) ? 1 : x * factorial(x - 1)) : NaN;

const operators = {
	'_POW': { name: 'Power', precedence: 4, associativity: 'right', method: (x, y) => x ** y },
	'_POS': { name: 'Positive', precedence: 3, associativity: 'right', method: (x) => x },
	'_NEG': { name: 'Negative', precedence: 3, associativity: 'right', method: (x) => -x },
	'_MUL': { name: 'Multiply', precedence: 2, associativity: 'left', method: (x, y) => x * y },
	'_DIV': { name: 'Divide', precedence: 2, associativity: 'left', method: (x, y) => x / y },
	'_MOD': { name: 'Modulo', precedence: 2, associativity: 'left', method: (x, y) => x % y },
	'_ADD': { name: 'Add', precedence: 1, associativity: 'left', method: (x, y) => x + y },
	'_SUB': { name: 'Subtract', precedence: 1, associativity: 'left', method: (x, y) => x - y },
};

const constants = {
	'E': Math.E,
	'LN2': Math.LN2,
	'LN10': Math.LN10,
	'LOG2E': Math.LOG2E,
	'LOG10E': Math.LOG10E,
	'PHI': (1 + Math.sqrt(5)) / 2,
	'PI': Math.PI,
	'SQRT1_2': Math.SQRT1_2,
	'SQRT2': Math.SQRT2,
	'TAU': 2 * Math.PI,
};

const methods = {
	'ABS': (x) => Math.abs(x),
	'ACOS': (x) => Math.acos(x),
	'ACOSH': (x) => Math.acosh(x),
	'ADD': (x, y) => x + y,
	'ASIN': (x) => Math.asin(x),
	'ASINH': (x) => Math.asinh(x),
	'ATAN': (x) => Math.atan(x),
	'ATANH': (x) => Math.atanh(x),
	'ATAN2': (y, x) => Math.atan2(y, x),
	'CBRT': (x) => Math.cbrt(x),
	'CEIL': (x) => Math.ceil(x),
	'COS': (x) => Math.cos(x),
	'COSH': (x) => Math.cosh(x),
	'DIVIDE': (x, y) => x / y,
	'EXP': (x) => Math.exp(x),
	'EXPM1': (x) => Math.expm1(x),
	'FACTORIAL': factorial,
	'FLOOR': (x) => Math.floor(x),
	'HYPOT': (...args) => Math.hypot(...args),
	'LOG': (x) => Math.log(x),
	'LOG1P': (x) => Math.log1p(x),
	'LOG10': (x) => Math.log10(x),
	'LOG2': (x) => Math.log2(x),
	'MAX': (...args) => Math.max(...args),
	'MEAN': (...args) => [...args].reduce((sum, x) => {
		return sum + x;
	}, 0) / [...args].length,
	'MIN': (...args) => Math.min(...args),
	'MOD': (x, y) => x % y,
	'MULTIPLY': (x, y) => x * y,
	'POW': (x, y) => x ** y,
	'SIN': (x) => Math.sin(x),
	'SINH': (x) => Math.sinh(x),
	'SQRT': (x) => Math.sqrt(x),
	'SUBTRACT': (x, y) => x - y,
	'SUM': (...args) => [...args].reduce((sum, x) => {
		sum += x;
		return sum;
	}, 0),
	'TAN': (x) => Math.tan(x),
	'TANH': (x) => Math.tanh(x),
};

export { symbols, operators, constants, methods }
