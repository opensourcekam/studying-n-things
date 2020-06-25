/** HOMEWORK */
/**
 * Homework Problem (Level: Easy)
 * Given a sentence, reverse the words of the sentence. 
 * For example, "i live in a house" becomes "house a in live i".
 * 
 * Note: Solve this using the Reverse Traversal technique. 
 * Later on, we show how to solve it more efficiently in Week 3's Special Tricks section.
 *  */

/**
 * EQSCV
 * 
 * given "i live in a house" => "house a in live i"
 * given "iliveinahouse" becomes "iliveinahouse"
 * given "0 1 5 9" => "9 5 1 0"
 * given "" => ""
 * given null => null
 * 
 * Do we need to return a string seperated by spaces?
 * Could we return an array?
 * Can we allocate memory to solve the problem? in the form of an array initilization
 * 
 * My initial solution is to:
 *   break the string by the seperator (we can assum this is a space but we could also take that as stdin)
 *   once the string is broken we would traverse it from length to 0 and swap positions of the items
 *   we can assume the middle item does not need to be swapped i.e. if there are 5 items - a b c d e => e d [c] b a -- c stays in place
 * 
 */

const swap = (a: string[], start: number, end: number) => {
	const temp = a[start];
	a[start] = a[end];
	a[end] = temp;
};

// allocating no memory and doing solution in O(n) time
const reverseSentenceInPlace = (sentence: string, seperator = ' ') => {
	if (!sentence && typeof sentence !== 'string') return null;

	if (typeof sentence === 'string') {
		const strArr = sentence.split(seperator);
		if (strArr.length === 1) return sentence;

		let start = 0;
		let end = strArr.length - 1;

		while (start < end) {
			swap(strArr, start, end);
			start++;
			end--;
		}

		return strArr.join(seperator);
	}

	return null;
};

// * given "" => "house a in live i"
//  * given "iliveinahouse" becomes "iliveinahouse"
//  * given "0 1 5 9" => "9 5 1 0"
//  * given "" => ""
//  * given null => null

console.log(
	`
  given: "i live in a house" 
  expect: "house a in live i"
  result: ${JSON.stringify(reverseSentenceInPlace('i live in a house'))}
  `
);

console.log(
	`
  given: "a house" 
  expect: "house a"
  result: ${JSON.stringify(reverseSentenceInPlace('a house'))}
  `
);

console.log(
	`
  given: "house" 
  expect: "house"
  result: ${JSON.stringify(reverseSentenceInPlace('house'))}
  `
);

console.log(
	`
  given: "0 1 5 9" 
  expect: "9 5 1 0"
  result: ${JSON.stringify(reverseSentenceInPlace('0 1 5 9'))}
  `
);

console.log(
	`
  given: "" 
  expect: ""
  result: ${JSON.stringify(reverseSentenceInPlace(''))}
  `
);

console.log(
	`
  given: {} 
  expect: null
  result: ${//@ts-ignore
	JSON.stringify(reverseSentenceInPlace({}))}
  `
);

console.log(
	`
  given: null 
  expect: null
  result: ${JSON.stringify(reverseSentenceInPlace(null))}
  `
);

console.log(
	`
  given: undefined 
  expect: null
  result: ${JSON.stringify(reverseSentenceInPlace(undefined))}
  `
);
