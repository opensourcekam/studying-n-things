/**
 * EQSCV
 * Homework Problem 2 (Level: Medium)
 * Given an array of integers, find the continuous subarray, which when sorted, results in the entire array being sorted. 
 * 
 * Examples:
 * [1,2,4,5,3,5,6,7] --> [4,5,3] - If you sort from indices 2 to 4, the entire array is sorted.
 * [1,3,5,2,6,4,7,8,9] --> [3,5,2,6,4] -  If you sort from indices 1 to 5, the entire array is sorted.
 * 
 * Question:
 * Can we expect any negative numbers?
 * Can we expect tp always find a result?
 * what do we want to return? the index of the bounds?
 * 
 * Solution
 * we loop over the array with two pointers
 * each pointer checks if its neighboring element is sorted 
 * if its sorted we move to the next bound if its not sorted we set that as the current edge
 * 
 * 
 */

// my solution broke on the edge case of outlying unsourted numbers
// o(n) time, space o(1)
// const sortedWhenSubArrayIsSorted = (a: number[]) => {
// 	if (!a.length || !a) return null;

// 	let lBound = 0;
// 	let rBound = a.length - 1;

// 	let start = 0;
// 	let end = a.length - 1;

// 	while (start < end) {
// 		const l = a[start];
// 		const r = a[end];

// 		if (l >= a[start + 1]) {
// 			lBound = start - 1;
// 		}

// 		if (r <= a[end - 1]) {
// 			rBound = end + 1;
// 		}

// 		start++;
// 		end--;
// 	}

// 	return a.slice(lBound, rBound);
// };

export const sortedWhenSubArrayIsSorted = (a: number[]) => {
	if (!a.length || !a) return null;

	let start = 0;
	let end = a.length - 1;

	// find dip in value
	for (start = 0; start < a.length - 1; start++) {
		if (a[start + 1] < a[start]) {
			break;
		}
	}

	// no dip found
	if (start === a.length - 1) {
		return null;
	}

	//find bump in values
	for (end = a.length - 1; end > 0; end--) {
		if (a[end - 1] > a[end]) {
			break;
		}
	}

	// find min and max of a[start...end]
	let max = Number.MAX_VALUE;
	let min = Number.MIN_VALUE;

	for (let k = start; k <= end; k++) {
		if (a[k] > max) {
			max = a[k];
		}

		if (a[k] < min) {
			min = a[k];
		}
	}

	//expand start and end outward
	while (start > 0 && a[start - 1] > min) {
		start--;
	}

	while (end < a.length - 1 && a[end + 1] < max) {
		end++;
	}

	return [ start, end ];
};
