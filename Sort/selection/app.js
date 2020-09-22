const selectionSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) min = j;
		}
		if (min !== i) {
			arr[i] = arr[i] + arr[min];
			arr[min] = arr[i] - arr[min];
			arr[i] = arr[i] - arr[min];
		}
	}
	return arr;
};

const numbers = [];
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
numbers.push(Math.round(99 * Math.random()));
console.log(numbers);
console.log(selectionSort(numbers));
