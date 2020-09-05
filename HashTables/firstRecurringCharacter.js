const firstRecChar = (array = null) => {
  if (array === null) {
    return undefined;
  }
  // in map, ordered insertion
  const map = new Map();
  for (let i of array) {
    if (map[i] !== undefined) {
      return i;
    }
    map[i] = i;
    console.log(map);
  }
  return undefined;
};

const arr = [2, 4, 9, 3, 2, 5, 6, 9];
console.log(firstRecChar(arr));
