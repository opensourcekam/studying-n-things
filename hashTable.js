const hashStringToInt = (str, tableSize) => {
	let hash = 17; // prime numbers spread out hashes

	for (let i = 0; i < str.length; i++) {
		// 13 is an arbitrary prime num
		hash = (13 * hash * str.charCodeAt(i)) % tableSize;
	}

	return hash;
};

class HashTable {
	constructor() {
		this.table = new Array(33);
		this.numItems = 0;
	}

	resize() {
		const newTable = new Array(this.table.length * 2);
		this.table.forEach((item) => {
			if (item) {
				item.forEach(([ key, value ]) => {
					const idx = hashStringToInt(key, newTable.length);
					if (newTable[idx]) {
						newTable[idx].push([ key, value ]);
					} else {
						newTable[idx] = [ [ key, value ] ];
					}
				});
			}
		});

		this.table = newTable;
	}

	setItem(k, v) {
		this.numItems++;
		const loadFactor = this.numItems / this.table.length;
		if (loadFactor > 0.8) {
			this.resize();
		}
		const idx = hashStringToInt(k, this.table.length);
		if (this.table[idx]) {
			this.table[idx].push([ k, v ]);
		} else {
			this.table[idx] = [ [ k, v ] ];
		}
	}

	getItem(k) {
		const idx = hashStringToInt(k, this.table.length);
		if (!this.table[idx]) {
			return null;
		}

		// O(n)
		return this.table[idx].find((x) => x[0] === k)[1];
	}
}

const mesa = new HashTable();

mesa.setItem('firstName', 'Johnny');
console.log(mesa.table.length);
mesa.setItem('middleName', 'Bravo');
mesa.setItem('eyeColor', 'blue');
console.log(mesa.table.length);
mesa.setItem('height', "6'1");
console.log(mesa.table.length);

console.log(mesa.getItem('firstName'));
console.log(mesa.getItem('middleName'));

console.log(mesa.table);
