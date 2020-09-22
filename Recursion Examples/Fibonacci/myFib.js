const myFibRecursion = (index) => {
	if (index < 2) {
		return index;
	}
	return myFibRecursion(index - 1) + myFibRecursion(index - 2);
};

const myFibIterative = (index) => {
	const fib = [0, 1];
	if (index < 2) {
		return fib[index];
	}
	for (let i = 2; i <= index; i++) {
		const element = fib[i - 1] + fib[i - 2];
		fib.push(element);
	}
	return fib[index];
};

console.log(myFibIterative(8));
console.log(myFibIterative(0));
console.log(myFibIterative(1));

console.log(myFibRecursion(8));
console.log(myFibRecursion(0));
console.log(myFibRecursion(1));
