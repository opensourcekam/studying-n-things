function counter(n) {
	console.log(n)
	// base case
	if(n === 10) {
		return;
	}
	return counter(n+1);
}

counter(11)
