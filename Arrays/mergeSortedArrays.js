// @desc: taking two sorted arrays and then sorting them
const merge = (array1 = null, array2 = null) => {
  if (array1 === null) {
    return array2;
  }
  if (array2 === null) {
    return array1;
  }
  let i = 0;
  let j = 0;
  const merged = [];

  // compare and add
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      merged.push(array1[i++]);
    } else {
      merged.push(array2[j++]);
    }
  }

  // add remaining of first array
  while (i < array1.length) {
    merged.push(array1[i++]);
  }

  // add remaining of second array
  while (j < array2.length) {
    merged.push(array2[j++]);
  }
  console.log(merged);
};

const array1 = [1, 3, 5, 7, 10, 20, 40, 70];
const array2 = [1, 2, 2, 3, 6, 9];
merge(array1, array2);
