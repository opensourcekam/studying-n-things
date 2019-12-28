const createQueue = require('./queue');

function createPriorityQueue() {
	const lowPriorityQueue = createQueue();
	const highPriorityQueue = createQueue();

	return {
		enqueue(item, isHighPriority = false) {
			isHighPriority ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item);
		},
		dequeue() {
			if (!highPriorityQueue.isEmpty()) {
				return highPriorityQueue.dequeue();
			}
			return lowPriorityQueue.dequeue();
		},
		peek() {
			if (!highPriorityQueue.isEmpty()) {
				return highPriorityQueue.peek();
			}
			return lowPriorityQueue.peek();
		},
		get length() {
			return lowPriorityQueue.length + highPriorityQueue.length;
		},
		isEmpty() {
			return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
		}
	};
}

const q = createPriorityQueue();

q.enqueue('A fix');
q.enqueue('A bug');
q.enqueue('A feature');

q.dequeue();
q.enqueue('EMERGENCY TASK!', true);
console.log(q.dequeue());
console.log(q.peek());

module.exports = createPriorityQueue;
