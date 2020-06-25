/** 
* (Level: Easy) 
* Given an array of numbers, replace each even number with two of the same number. 
* e.g, [1,2,5,6,8] -> [1,2,2,5,6,6,8,8]. 
* Assume that the array has enough space to accommodate the result.
*/

// ESTCV
/**
 * E / Q:
 * 
 * Example (test cases):
 * given [1,2,4,5,6] => [1,2,2,4,4,5,6,6]
 * given [1,3,5] => [1,3,5]
 * given [2,4,6] => [2,2,4,4,6,6]
 * 
 * Question:
 * What if numbers already repeat twice? i.e. [1,2,2,4,5,6] => do we expect => [1,2,2,2,2,4,4,5,6,6] as output?
 * what if the array is empty? what do we want returned (null or [])?
 * what if the array is all odd or all even? 
 * 
 * Solution:
 * test if current element in loop is even or odd
 * if element is even duplicate it in place
 * if it is odd do nothing
 * 
 * Code:
 */

// forward traversal
// const dupEvenNumbers = (arr: number[]) => {
// 	// for each element
// 	for (let i = 0; i < arr.length; i++) {
// 		const curr = arr[i];
// 		// test if element is even or odd - its even if mod 2 is 0
// 		if (curr % 2 === 0) {
// 			// splice element into array
// 			arr.splice(i, 0, curr);
// 			// iterate i to next position so infinite loop does not occur
// 			i++;
// 		}
// 	}

// 	return arr;
// };

// reverse traversal
const dupEvenNumbers = (arr: number[]) => {
	// for each element
	for (let i = arr.length; i >= 0; i--) {
		const curr = arr[i];
		// test if element is even or odd - its even if mod 2 is 0
		if (curr % 2 === 0) {
			// splice element into array
			arr.splice(i, 0, curr);
		}
	}

	return arr;
};

/**
 * Verify: 
 * we loop over each element in the array 
 * we take the remainer or modulus % of 2 which will gaurntee its even
 * then we insert our curr (even number) in place and iterate i so we can go to the elm after our insertion 
 */

console.log(
	`
  given: [1,2,4,5,6] 
  expect: [1,2,2,4,4,5,6,6]
  result: ${JSON.stringify(dupEvenNumbers([ 1, 2, 4, 5, 6 ]))}
  `
);

console.log(
	`
  given: [1,5,9] 
  expect: [1,5,9]
  result: ${JSON.stringify(dupEvenNumbers([ 1, 5, 9 ]))}
  `
);

console.log(
	`
  given: [2,2,2,2] 
  expect: [2,2,2,2,2,2,2,2]
  result: ${JSON.stringify(dupEvenNumbers([ 2, 2, 2, 2 ]))}
  `
);
console.log(
	`
  given: [0] 
  expect: [0,0]
  result: ${JSON.stringify(dupEvenNumbers([ 0 ]))}
  `
);

console.log(
	`
  given: [] 
  expect: []
  result: ${JSON.stringify(dupEvenNumbers([]))}
  `
);
