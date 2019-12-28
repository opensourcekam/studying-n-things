const rope = { value: 1500, weight: 1 };
const food = { value: 2000, weight: 3 };
const tent = { value: 3000, weight: 4 };
const iphone = { value: 2000, weight: 1 };

const constraint = 4;

// each dp problem contains a grid

const constraints = [ 1, 2, 3, 4 ];
const items = [ rope, tent, food, iphone ];

const createGrid = () => {
	let newGrid = [];

	items.map((_, row) => {
		newGrid[row] = [];
		return constraints.map((__, col) => {
			newGrid[row][col] = 0;
		});
	});

	return newGrid;
};

const matrix = createGrid();

const fillInGrid = (grid) => {
	for (const row in items) {
		for (const col in constraints) {
			let { value, weight } = items[row];
			if (grid[row - 1] === undefined) {
				grid[row][col] = value;
				continue;
			}
			let prevRowSameCol = grid[row - 1][col];
			if (weight > constraints[col]) {
				grid[row][col] = prevRowSameCol;
				continue;
			}
			if (weight === constraints[col]) {
				grid[row][col] = prevRowSameCol > value ? prevRowSameCol : value;
				continue;
			}
			let diff = constraints[col - 1] - weight;
			grid[row][col] =
				prevRowSameCol > value + grid[row - 1][diff] ? prevRowSameCol : value + grid[row - 1][diff];
		}
	}
	return grid;
};

console.log(fillInGrid(matrix));
