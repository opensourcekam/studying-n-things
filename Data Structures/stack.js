function createStack() {
	const stack = [];
	return {
		push(item) {
			stack.push(item);
		},
		pop() {
			return stack.pop();
		},
		peek() {
			return stack[stack.length - 1];
		},
		get length() {
			return stack.length;
		},
		isEmpty() {
			return stack.length === 0;
		}
	};
}

const lowerBodyStack = createStack();

lowerBodyStack.push('underwear');
lowerBodyStack.push('socks');
lowerBodyStack.push('pants');
lowerBodyStack.push('shoes');

lowerBodyStack.pop();
lowerBodyStack.pop();

console.log(lowerBodyStack.length);
console.log(lowerBodyStack.peek());
