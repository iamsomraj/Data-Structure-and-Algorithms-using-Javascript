const myFactorial = (num) => {
	if (num < 2) {
		return num;
	}
	return num * myFactorial(num - 1);
};

const myFacIter = (num) => {
	let fact = 1;
	if (num < 2) {
		return fact;
	}
	for (let i = 2; i <= num; i++) {
		fact *= i;
	}
	return fact;
};

console.log(myFactorial(5));
console.log(myFactorial(2));
console.log(myFactorial(1));
console.log(myFacIter(4));
console.log(myFacIter(1));
