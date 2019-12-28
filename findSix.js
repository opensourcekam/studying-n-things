const items = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];

function findSix(array) {
	let hasSix = 'no!';
	array.forEach((item) => {
		if (item === 6) {
			hasSix = 'yes';
		}

		if (Array.isArray(item)) {
			hasSix = findSix(item);
		}
	});

	return hasSix;
}

console.log(findSix(items));
