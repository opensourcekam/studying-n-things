// Mutates input array by swapping indexes

export const swap = (a: any[], start: number, end: number): null => {
	const temp = a[start];
	a[start] = a[end];
	a[end] = temp;

	return null;
};
