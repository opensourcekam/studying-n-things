/**
 * given an array find 2 numbers that sum to target
 * 
 * is the array sorted? yes assume sorted
 * 
 * we expect the indexes of the items which sum to target
 * 
 * given [1,2,3,4,5], 8 => [2,4]
 * given [0,5,6,9], 11 => [1,2]
 * given [0], 2 => null
 * given [], null => null
 * 
 * We want two pointers, one at the beginning one at the end
 * if the sum is > target we should increment the left pointer right by one
 * if the sum is < target we should decrement the right pointer by one
 */

const twoSum = (a: number[], target: number) => {
	let start = 0;
	let end = a.length - 1;

	while (start < end) {
		const l = a[start];
		const r = a[end];
		const total = l + r;
		const matches = total === target;

		if (matches) {
			return [ start, end ];
		}

		if (total > target) {
			end--;
		} else if (total < target) {
			start++;
		}
	}

	return null;
};

console.log(`
  given: [1,2,3,4,5], 9
  expect: [3,4]
  result: ${JSON.stringify(twoSum([ 1, 2, 3, 4, 5 ], 9))}
`);

console.log(`
  given: [1,2,3,4,5], 3
  expect: [0,1]
  result: ${JSON.stringify(twoSum([ 1, 2, 3, 4, 5 ], 3))}
`);

console.log(`
  given: [1,2,3,4,5], 8
  expect: [2,4]
  result: ${JSON.stringify(twoSum([ 1, 2, 3, 4, 5 ], 8))}
`);

console.log(`
  given: [1,2,3,4,5], 4
  expect: [0,2]
  result: ${JSON.stringify(twoSum([ 1, 2, 3, 4, 5 ], 4))}
`);

console.log(`
  given: [1,2,3], 5
  expect: [1,2]
  result: ${JSON.stringify(twoSum([ 1, 2, 3 ], 5))}
`);

console.log(`
  given: [1,2], 3
  expect: [0,1]
  result: ${JSON.stringify(twoSum([ 1, 2 ], 3))}
`);

console.log(`
  given: [1,2], 12
  expect: null
  result: ${JSON.stringify(twoSum([ 1, 2 ], 12))}
`);
console.log(`
  given: [], 12
  expect: null
  result: ${JSON.stringify(twoSum([], 12))}
`);
