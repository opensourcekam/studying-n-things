import { findIslands } from './Jared-July-2-2020';

it.each([
	{
		input: [ [ 0, 1, 0, 0 ], [ 0, 1, 0, 1 ], [ 0, 0, 1, 0 ] ],
		expectation: 3
	}
])('passes', (t) => {
	const actual = findIslands(t.input);
	expect(actual).toBe(t.expectation);
});
