/**
 * 
 * Homework Problem 1 (Level: Easy)
 * Given a sorted array in non-decreasing order, return an array of squares of each number, also in non-decreasing order. For example:
 * [-4,-2,-1,0,3,5] -> [0,1,4,9,16,25]
 * How can you do it in O(n) time?
 */

/**
  * EQSCV
  * Q:
  * i'm assuming negative signs can be ignored.
  * can I sort at the end?
  * 
  * E:
  * given [-3,-2,-1,0,4,6] => [0, 1, 2, 9, 12, 36]
  * given [-10] => [100]
  * given [10, 100]=> [100, 1000]
  * given []=>[]
  * given null=> null
  * 
  * S:
  * loop over each element we could do this from both sides and sort this way
  * we would math.pow each element in place then sort at the end
  * if we cannot sort at the end we could somehow swap our left and right elemnts  
  */
const ASDC = (a, b) => a - b;
// const squareElements = (a: number[]) => {
// 	// o(n) - space
// 	const result = [];

// 	// o(n) - time
// 	for (let i = 0; i <= a.length - 1; i++) {
// 		const squared = Math.pow(a[i], 2);
// 		result.push(squared);
// 	}

// o(nlogn) - time
// 	return result.sort(ASDC);
// };

const square = (n) => Math.pow(Math.abs(n), 2);

// o(n) time, o(1) space - we allocate an array of n
const squareElements = (a: number[]) => {
	if (a == null) return null;

	const result = new Array(a.length);

	let start = 0;
	let end = a.length - 1;
	let resultIndex = result.length - 1;

	while (start <= end) {
		// sorting happens here
		if (Math.abs(a[start]) > Math.abs(a[end])) {
			// console.log(square(a[start]), resultIndex);
			result[resultIndex] = square(a[start]);
			start++;
		} else {
			// console.log(square(a[end]), resultIndex);
			result[resultIndex] = square(a[end]);
			end--;
		}

		resultIndex--;
	}

	return result;
};

console.log(`
  given: [ -3, -2, -1, 0, 4, 6 ]
  expect: [ 0, 1, 2, 9, 12, 36 ]
  result: ${JSON.stringify(squareElements([ -3, -2, -1, 0, 4, 6 ]))}
`);
