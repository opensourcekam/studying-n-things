const determineFruit = ({ size, redness }) => {
	const fruit = [
		{ name: 'grape', size: 1, redness: 0 },
		{ name: 'orange', size: 2, redness: 1 },
		{ name: 'grapefruit', size: 3, redness: 2 }
	];

	const { name } = fruit.reduce(
		(prev, curr) => {
			let curCalc = calcDistance([ [ size, curr.size ], [ redness, curr.redness ] ]);
			return prev.dist < curCalc ? prev : { name: curr.name, dist: curCalc };
		},
		{
			name: fruit[0].name,
			dist: calcDistance([ [ size, fruit[0].size ], [ redness, fruit[0].redness ] ])
		}
	);

	return `This is most likely a ${name}`;
};

console.log(determineFruit({ size: 3, redness: 1 }));

// k-nearest negibors or KNN
// Finds shortest distance detween features
// Helps us to make educated guessess

function calcDistance(data) {
	return Math.sqrt(data.reduce((acc, [ init, test ]) => acc + Math.pow(init - test, 2), 0));
}

// Euclidean distance
// Pick the right features, the more the better
// No magic number, sqrt(N) number of neigbors
