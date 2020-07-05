/**
 * (Level: Easy) 
 * Given an array of integers, find the contiguous subarray (with at least 1 element) with the maximum sum. 
 * The array can contain both negative and positive integers.
 * 
 * Example
 * [-2, -3, 4, -1, -2, 1, 5, -1]
 * 
 * Question
 * - Can there always be negative numbers?
 * - Is an empty array a passing case?
 * 
 * Solution:
 * Brute force
 * Find sum of every element beginning with 0 and forward would require 2 loops
 * T: O(n^2)
 * S: O(1)
 * 
 * Optimal solution - Kadane's Algorithm
 * A "Dynamic programming" solution, keeps the max of all sub arrays as a pointer
 * 
 */

export const subArraySum = (a: number[]): number => {
	if (a === null || a.length === 0) {
		// throw new Error('Input array is empty or null');
		return null;
	}

	let maxSum = a[0];
	let maxEndingHere = a[0];

	for (let i = 0; i <= a.length - 1; i++) {
		const element = a[i];
		maxEndingHere = Math.max(element, maxEndingHere + element);
		maxSum = Math.max(maxSum, maxEndingHere);
	}

	return maxSum;
};
