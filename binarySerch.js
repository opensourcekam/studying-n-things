const items = [ 1, 5, 2, 7, 3, 12, 6, 10 ];

// O(n)
// once for each item

function search(list, item) {
	let hasItem = null;
	let counter = 0;
	for (const e of list) {
		counter++;
		if (e === item) {
			hasItem = true;
			break;
		}
	}
	console.log(counter);
	return hasItem;
}

console.log(search(items, 12));

// O(log n)
// 2^3 = 8
// 2^10 = 1024
// 2^20 = 1 million

function fastSearch(list, item) {
	list.sort((a, b) => a - b);
	let low = 0;
	let high = list.length;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let guess = list[mid];
		if (guess === item) {
			return true;
		}

		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return null;
}

console.log(fastSearch(items, 12));
