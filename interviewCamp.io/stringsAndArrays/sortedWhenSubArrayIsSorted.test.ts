import { sortedWhenSubArrayIsSorted } from './sortedWhenSubArrayIsSorted';

it.each([
  { input: [ 1, 2, 3 ] },
  { input: [ 1 ] },
  { input: [ ] },
])('returns null for sorted arrays', (t) => {
  const actual = sortedWhenSubArrayIsSorted(t.input);
  expect(actual).toBeNull();
});

it.each([
  { input: [ 1, 2, 4, 5, 3, 5, 6, 7 ], expectation: [ 4, 5, 3 ] },
  { input: [ 1, 3, 5, 2, 6, 4, 7, 8, 9 ], expectation: [ 3, 5, 2, 6, 4 ] },
  { input: [ 1, 2, 4, 5, 3, 7, 5, 6, 8 ], expectation: [ 4, 5, 3, 7, 5, 6 ] },
  { input: [ 3, 2, 1, 4, 5 ], expectation: [ 3, 2, 1 ] },
  { input: [ 1, 2, 3, 5, 4 ], expectation: [ 5, 4 ] },
  { input: [ 3, 2, 1 ], expectation: [ 3, 2, 1 ] },
])('returns the correct start and end indicies', (t) => {
  const actual = sortedWhenSubArrayIsSorted(t.input);
  expect(actual).toStrictEqual(t.expectation);
});
