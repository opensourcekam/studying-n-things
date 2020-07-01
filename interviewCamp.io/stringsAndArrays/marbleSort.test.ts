import { marbleSort } from './marbleSort';

it.each([
	{ input: [ 1, 0, 1, 2, 1, 0, 1, 2 ], output: [ 0, 0, 1, 1, 1, 1, 2, 2 ] },
	{ input: [ 2, 0, 1 ], output: [ 0, 1, 2 ] },
	{ input: [ 0, 2, 1 ], output: [ 0, 1, 2 ] },
	{ input: [ 0, 0, 0 ], output: [ 0, 0, 0 ] }
])('returns expected marble order', (t) => {
	const actual = marbleSort(t.input);
	expect(actual).toEqual(t.output);
});
