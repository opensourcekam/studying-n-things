import { subArraySum } from './subArraySum';

it.each([
	{ input: [ -2, -3, 4, -1, -2, 1, 5, -1 ], output: 7 },
	{ input: [], output: null },
	{ input: null, output: null },
])('Returns expected sum from subarray', (t) => {
	const actual = subArraySum(t.input);
	expect(actual).toEqual(t.output);
});
