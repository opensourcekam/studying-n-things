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

export const sortedWhenSubArrayIsSorted = (nums: number[]) => {
	if (isSorted(nums)) return null;

	const dipNdx = findDipNdxFromStart(nums);
	const bumpNdx = findBumpNdxFromEnd(nums);

	const slice = nums.slice(dipNdx, bumpNdx + 1);
	const min = Math.min(...slice);
	const max = Math.max(...slice);

	const startNdx = expandStartNdxToMin(nums, dipNdx, min);
	const endNdx = expandEndNdxToMax(nums, bumpNdx, max);

	return nums.slice(startNdx, endNdx + 1);
};

const isSorted = (nums: number[]): boolean => {
	if (nums.length <= 1) {
		return true;
	}
	for (let ndx = 1; ndx < nums.length; ndx++) {
		const prev = nums[ndx - 1];
		const curr = nums[ndx];
		if (prev > curr) {
			return false;
		}
	}
	return true;
}

const findDipNdxFromStart = (unsortedNums: number[]): number => {
	for (let ndx = 0; ndx < unsortedNums.length - 1; ndx++) {
		const curr = unsortedNums[ndx];
		const next = unsortedNums[ndx + 1];
		if (next < curr) {
			return ndx;
		}
	}
	throw new Error('expected unsorted number array');
}

const findBumpNdxFromEnd = (unsortedNums: number[]): number => {
	for (let ndx = unsortedNums.length - 1; ndx > 0; ndx--) {
		const prev = unsortedNums[ndx - 1];
		const curr = unsortedNums[ndx];
		if (prev > curr) {
			return ndx;
		}
	}
	throw new Error('expected unsorted number array');
}

const expandStartNdxToMin = (nums: number[], startNdx: number, min: number) => {
	while (startNdx > 0 && nums[startNdx - 1] > min) {
		startNdx--;
	}
	return startNdx;
}

const expandEndNdxToMax = (nums: number[], endNdx: number, max: number) => {
	while (endNdx < nums.length - 1 && nums[endNdx + 1] < max) {
		endNdx++;
	}
	return endNdx;
}