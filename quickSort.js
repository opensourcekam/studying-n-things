// Divide and conqur
// less than array
// pivot
// greate than array
function quickSort(array) {
	console.log('hey');
	if (array.length < 2) {
		return array;
	}
	let pivotIndex = Math.floor(array.length / 2);
	// let pivotIndex = 0
	// let pivotIndex = array.length - 1;
	let pivot = array[pivotIndex];
	let less = [];
	let greater = [];

	for (const item in array) {
		if (item != pivotIndex) {
			array[item] > pivot ? greater.push(array[item]) : less.push(array[item]);
		}
	}

	return [ ...quickSort(less), pivot, ...quickSort(greater) ];
}

console.log(quickSort([ 6, 5, 4, 3, 2, 1 ]));

// o(n) * o(log n) = o(n log n) -> best average case
