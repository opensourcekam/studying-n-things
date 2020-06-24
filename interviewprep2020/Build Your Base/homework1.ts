/**
 * Homework Problem 1 (Level: Easy)
 * Given an array of integers, find a pair of integers that sums to a number X.
 * For e.g, if A = [6,3,5,2,1,7]. X = 4, Result= [3,1]
 * We recommend solving this with HashTable/HashSet first. In later sections we solve this using Sorting.
 * 
 */

// brute force
// o(n^2)
// const sumToX = (a: number[], x: number) => {
// 	for (let i = 0; i < a.length - 1; i++) {
// 		const curr = a[i];

// 		// sets bound below input x
// 		if (curr < x) {
// 			for (let j = 0; j < a.length - 1; j++) {
// 				if (a[j] + curr === x) {
// 					return [ curr, a[j] ];
// 				}
// 			}
// 		}
// 	}

// 	return null;
// };

// o(n)
const sumToX = (a: number[], x: number) => {
	const map = {};
	for (let i = 0; i < a.length - 1; i++) {
		const curr = a[i];

		// sets bound below input x
		if (curr < x) {
			const t = x - a[i];

			if (map[t]) {
				return [ curr, t ];
			}

			map[curr] = true;
		}
	}

	return null;
};

console.log(sumToX([ 2, 3, 4, 6, 3, 5, 1, 7, 3, 5, 1 ], 4));
