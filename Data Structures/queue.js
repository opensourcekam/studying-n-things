function createQueue(initial) {
	const queue = initial || [];

	return {
		enqueue(item) {
			return queue.unshift(item);
		},
		dequeue() {
			return queue.pop();
		},
		peek() {
			return queue[queue.length - 1];
		},
		get length() {
			return queue.length;
		},
		isEmpty() {
			return queue.length === 0;
		}
	};
}

// const q1 = createQueue([ 1, 2, 3, 4, 5 ]);

// q1.dequeue();
// q1.dequeue();
// q1.dequeue();
// q1.dequeue();
// q1.dequeue();
// console.log(q1.enqueue('ABC'));
// console.log(q1.peek());

// console.log(`----- PLAN -----`);
// const plan = createQueue();
// console.log('isEmpty: ', plan.isEmpty());
// plan.enqueue('Read');
// plan.enqueue('Write');
// plan.enqueue('Celebrate');
// console.log('peek: ', plan.peek());

module.exports = createQueue;
