/**
 * 
 * (Level: Easy) Given an array of positive integers, find the contiguous subarray that sums to a given number X.
 * For example, input = [1,2,3,5,2] and X=8, Result = [3,5]
 * 
 */

export const arraySumsToX = (a: number[], x: number): number[] => {
	let start = 0;
	let end = 0;
	let sum = a[0];

	while (start < a.length) {
		if (start > end) {
			end = start;
			sum = a[start];
		}

		if (sum < x) {
			if (end === a.length - 1) {
				break;
			}

			end++;
			sum += a[end];
		} else if (sum > x) {
			sum -= a[start];
			start++;
		} else {
			return [ start, end ];
		}
	}

	return null;
};

/**
 * 
 * (Level: Medium) Given a String, find the longest substring with unique characters.
 * 
 * For example: "whatwhywhere" --> "atwhy"
 * 
 * E:
 * - Given "abcabca" --> "abc"
 * - Given "wheretheyattho" --> "reth"
 * 
 * Q:
 * - Should we account for capitalization?
 * - Do we need to account for numbers or can we always expect letters?
 * 
 * S:
 * 
 */

export const findLongestUniqueSubString = (str: string): string | null => {
	if (!str || typeof str !== 'string') {
		// throw new Error('Expected a string')
		return null;
	}

	return '';
};
