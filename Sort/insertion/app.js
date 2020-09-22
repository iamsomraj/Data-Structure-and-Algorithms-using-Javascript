const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		let temp = arr[i];
      while (j >= 0 && arr[j] > temp) {
         // shift the elements
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = temp;
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
console.log(insertionSort(numbers));
