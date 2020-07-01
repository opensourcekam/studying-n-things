/**
 * 
 * Homework Problem (Level: Medium)
 * Given an array with n marbles colored Red, White or Blue, sort them so that marbles of the same color are adjacent, with the colors in the order Red, White and Blue. 
 * Assume the colors are given as numbers - 0 (Red), 1 (White) and 2 (Blue). 
 * For example, if A = [1,0,1,2,1,0,1,2], Output = [0,0,1,1,1,1,2,2].
 * 
 * EQSCV
 * 
 * Examples:
 * given [ 0, 1, 1, 1, 2, 2, 0 ] expect [ 0, 0, 1, 1, 1, 2, 2 ]
 * given [ 0, 1, 2 ] expect [ 0, 1, 2 ]
 * given [ 0, 0, 0 ] expect [ 0, 0, 0 ]
 * given [] expect []
 * given null expect null
 * 
 * Question:
 * can we ever expect a new color to be introduced?
 * can we allocate another array?
 * can we expect negative values?
 * 
 * Solution:
 * 
 * We can while loop over the array
 *    swapping 2s to a high partition and 0s to a low partition
 *    we would leave 1s in the middle (or rather they'd eventually settle there)
 */

import { swap } from '../utils';

enum Color {
	RED = 0,
	BLUE = 2,
	WHITE = 1
}

const getColor = (n: number): Color => {
	if (n === 0) {
		return Color.RED;
	} else if (n === 1) {
		return Color.WHITE;
	} else if (n === 2) {
		return Color.BLUE;
	}

	return -1;
};

export const marbleSort = (a: number[]): number[] => {
	let low = 0;
	let high = a.length - 1;
	let i = 0;

	while (i <= high) {
		const color = getColor(a[i]);

		if (color === Color.RED) {
			swap(a, i, low);
			low++;
			i++;
		} else if (color === Color.BLUE) {
			swap(a, i, high);
			high--;
		} else if (color === Color.WHITE) {
			i++;
		} else {
			throw new Error('Unknown color');
		}
	}

	return a;
};
