// Pies

const prevResults = [
	{ weekend: 0, temp: 1, pies: 100 },
	{ weekend: 0, temp: 2, pies: 150 },
	{ weekend: 1, temp: 3, pies: 200 },
	{ weekend: 1, temp: 4, pies: 300 }
];

// Euclidian distance
function calcDistance(data) {
	return Math.sqrt(data.reduce((acc, [ init, test ]) => acc + Math.pow(init - test, 2), 0));
}

function calcNegibors(results, { weekend, temp }) {
	return results
		.reduce((acc, curr) => {
			let currCalc = calcDistance([ [ weekend, curr.weekend ], [ temp, curr.temp ] ]);
			return [ ...acc, { ...curr, dist: currCalc } ];
		}, [])
		.sort((a, b) => (a.dist < b.dist ? -1 : a.dist > b.dist ? 1 : 0));
}

const [ first, second, ...rest ] = calcNegibors(prevResults, { weekend: 1, temp: 2 });

console.log(first, second, rest);
