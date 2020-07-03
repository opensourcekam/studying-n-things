// start 1507

/**
 * Given: 
 * [[0,1,0,0],
 * [0,1,0,1]
 * [0,0,1,0]] 
 * ->
 * 3
 * 
 * [
 * [0]
 * ] -> 0
 * 
 * [
 * [0,1,1,0],
 * [0,0,0,1]
 * ] -> 2
 * 
 * Solution: 
 * 
 */

type Coord = [number, number];

const DELTAS: Coord[] = [ [ -1, 0 ], [ 0, -1 ], [ 1, 0 ], [ 0, 1 ] ];

const isValid = (matrix: number[][], coord: Coord): boolean => {
	const [ r, c ] = coord;
	const numRows = matrix.length;
	const numCols = matrix[0].length;

	if (r < 0 || r > numRows - 1) {
		return false;
	}

	if (c < 0 || c > numCols - 1) {
		return false;
	}

	return true;
};

const get = (matrix: number[][], coord: Coord): number => {
	if (!isValid(matrix, coord)) {
		return 0;
	}
	const [ r, c ] = coord;
	return matrix[r][c];
};

const set = (matrix: number[][], coord: Coord, value: number) => {
	if (!isValid(matrix, coord)) {
		return;
	}

	const [ r, c ] = coord;
	matrix[r][c] = value;
};

const explore = (matrix: number[][], coord: Coord) => {
	if (get(matrix, coord) === 0) {
		return;
	}

	set(matrix, coord, 0);

	for (const delta of DELTAS) {
		const [ r, c ] = coord;
		const [ dr, dc ] = delta;
		explore(matrix, [ r + dr, c + dc ]);
	}
};

// let r be the number of rows
// let c be the number of cols
// let n be r * c
// time: O(n) space: O(1)
export const findIslands = (matrix: number[][]): number => {
	let total = 0;

	for (let r = 0; r < matrix.length; r++) {
		const row = matrix[r];

		for (let c = 0; c < row.length; c++) {
			const el = get(matrix, [ r, c ]);

			if (el === 1) {
				total++;
			}

			explore(matrix, [ r, c ]);
		}
	}

	return total;
};
