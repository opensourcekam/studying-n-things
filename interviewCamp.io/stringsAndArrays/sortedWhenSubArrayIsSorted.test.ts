import { sortedWhenSubArrayIsSorted } from './sortedWhenSubArrayIsSorted';

it.each([
  { input: [ 1, 2, 4, 5, 3, 5, 6, 7 ], expectation: [ 3, 4 ] },
  { input: [ 1, 3, 5, 2, 6, 4, 7, 8, 9 ], expectation: [ 2, 5 ] },
  { input: [ 1, 2, 4, 5, 3, 7, 5, 6, 8 ], expectation: [ 3, 6 ] },
])('returns the correct start and end indicies', (t) => {
  const actual = sortedWhenSubArrayIsSorted(t.input);
  expect(actual).toStrictEqual(t.expectation);
});
