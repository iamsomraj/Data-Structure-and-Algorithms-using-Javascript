const mergeSort = (arr) => {
	if (arr.length === 1) {
		return arr;
	}
	let middle = Math.round(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	let i = 0;
	let j = 0;
	let arr = [];
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			arr.push(left[i++]);
		} else {
			arr.push(right[j++]);
		}
	}
	return arr.concat(left.slice(i)).concat(right.slice(j));
};

const numbers = [];
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
numbers.push(Math.round(1500 * Math.random()));
console.log(numbers);
console.log(mergeSort(numbers));
