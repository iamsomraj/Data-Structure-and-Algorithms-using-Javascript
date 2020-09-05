const getCommonItems = (arr1, arr2) => {
  if (arr1 && arr2) {
    const map = new Map();
    const commonElements = new Set();
    for (let ele of arr1) {
      map[ele] = ele;
    }
    for (let ele of arr2) {
      if (map[ele]) {
        commonElements.add(ele);
      }
      map[ele] = ele;
    }
    return commonElements;
  }
  return undefined;
};

const array1 = "helloworld".split("");
const array2 = "heyhowareyou".split("");

console.log(getCommonItems(array1, array2));
