import { arraySumsToX } from './slidingWindow';

it.each([
	{ input: { a: [ 1, 2, 3 ], x: 5 }, output: [ 1, 2 ] },
	{ input: { a: [ 5, 3, 1, 7, 6, 4, 2, 3 ], x: 14 }, output: [ 2, 4 ] }
])('returns correct pair for array sum to target', (t) => {
	const actual = arraySumsToX(t.input.a, t.input.x);
	expect(actual).toEqual(t.output);
});
