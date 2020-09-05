class myHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // @desc: hash function based on the size
  // @comp: O(1) - constant - usually very fast
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
      hash %= this.data.length;
    }
    return hash;
  }

  // @desc: setting the key value pair in the hash table
  // @comp: O(1) - constant time
  set(key, value) {
    let address = this._hash(key);
    if (this.data[address] === undefined) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  // @desc: getting the value from key
  // @comp: O(1) - constant time
  get(key) {
    for (let current of this.data) {
      if (current !== undefined) {
        for (let pairs of current) {
          if (pairs[0] === key) {
            return pairs[1];
          }
        }
      }
    }
    return undefined;
  }

  // @desc: getting all the keys from hash table
  // @comp: O(1) but can be O(n) - linear time - because of collision
  keys() {
    const myKeys = [];
    for (const current of this.data) {
      if (current !== undefined) {
        for (let pairs of current) {
          myKeys.push(pairs[0]);
        }
      }
    }
    return myKeys;
  }

  // @desc: getting all the keys from hash table
  // @comp: O(1) but can be O(n) - linear time - because of collision
  values() {
    const myValues = [];
    for (const current of this.data) {
      if (current !== undefined) {
        for (const pairs of current) {
          myValues.push(pairs[1]);
        }
      }
    }
    return myValues;
  }
}

const hash = new myHashTable(50);
hash.set("apples", 2000);
hash.set("oranges", 3000);
hash.set("mangoes", 8500);
console.log(hash);
console.log(hash.keys());
console.log(hash.values());
