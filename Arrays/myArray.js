class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // @desc: getting the item from index
  // @comp: O(1) - constant time
  get = (index) => (this.data[index] ? this.data[index] : undefined);

  // @desc: insert item at the end
  // @comp: O(1) - constant time
  // @comp: but sometimes it can be O(n) - linear time
  push = (item) => {
    this.data[this.length] = item;
    this.length++;
  };

  // @desc: remove item from the end
  // @comp: O(1) - constant time
  pop = () => {
    if (this.length > 0) {
      const item = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return item;
    }
  };

  // @desc: shift elements by one place to the left direction
  // @comp: O(n) - linear time
  shiftToLeft = (index) => {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  };

  // @desc: shift elements by one place to the right direction
  // @comp: O(n) - linear time
  shiftToRight = (index) => {
    for (let i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
  };

  // @desc: delete items from the front
  // @comp: O(n) - linear time
  shift = () => {
    if (this.length > 0) {
      const item = this.data[0];
      this.shiftToLeft(0);
      delete this.data[this.length - 1];
      this.length--;
      return item;
    }
  };

  // @desc: insert elements at the front
  // @comp: O(n) - linear time
  unshift = (item) => {
    this.shiftToRight(0);
    this.data[0] = item;
    this.length++;
  };

  // @desc: delete from any index
  // @comp: O(n) - linear time
  delete = (index) => {
    if (this.length > 0) {
      const item = this.data[index];
      this.shiftToLeft(index);
      delete this.data[this.length - 1];
      this.length--;
      return item;
    }
  };
}

console.log("\n\n");
const arr1 = new myArray();
arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
console.log("Start");
console.log(arr1.data, arr1.length);
console.log("Unshift 100:");
arr1.unshift(100);
console.log(arr1.data, arr1.length);
console.log("End");

console.log("\n\n");
const arr2 = new myArray();
arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);
console.log("Start");
console.log(arr2.data, arr2.length);
console.log("Push 100:");
arr2.push(100);
console.log(arr2.data, arr2.length);
console.log("End");

console.log("\n\n");
const arr3 = new myArray();
arr3.push(10);
arr3.push(20);
arr3.push(30);
arr3.push(40);
console.log("Start");
console.log(arr3.data, arr3.length);
console.log("Get index 3:");
console.log(arr3.get(3));
console.log(arr3.data, arr3.length);
console.log("End");

console.log("\n\n");
const arr4 = new myArray();
arr4.push(10);
arr4.push(20);
arr4.push(30);
arr4.push(40);
console.log("Start");
console.log(arr4.data, arr4.length);
console.log("Delete index 2:");
console.log(arr4.delete(2));
console.log(arr4.data, arr4.length);
console.log("End");
