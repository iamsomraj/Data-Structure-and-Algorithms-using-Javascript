class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

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
    const newNode = new Node(key, value);
    if (this.data[address] === undefined) {
      this.data[address] = newNode;
      return;
    }
    let leader = this.data[address];
    while (leader.next !== null) {
      leader = leader.next;
    }
    leader.next = newNode;
  }

  // @desc: getting the value from key
  // @comp: O(1) - constant time
  get(key) {
    for (let current of this.data) {
      let leader = current;
      while (leader !== null) {
        if (leader.key === key) {
          return leader.value;
        }
        leader = leader.next;
      }
    }
    return undefined;
  }

  // @desc: getting all the keys from hash table
  // @comp: O(1) but can be O(n) - linear time - because of collision
  keys() {
    const myKeys = [];
    for (let current of this.data) {
      while (current !== null) {
        myKeys.push(current.key);
        current = current.next;
      }
    }
    return myKeys;
  }

  // @desc: getting all the keys from hash table
  // @comp: O(1) but can be O(n) - linear time - because of collision
  values() {
    const myValues = [];
    for (let current of this.data) {
      while (current !== null) {
        myValues.push(current.value);
        current = current.next;
      }
    }
    return myValues;
  }
}

const hash = new myHashTable(2);
hash.set("dairymilk", 2000);
hash.set("kitkat", 3000);
hash.set("bounty", 8500);
hash.set("mars", 9500);
hash.set("eclairs", 9500);
hash.set("creamfills", 9500);
console.log(hash);
console.log(hash.get("mars"));
console.log(hash.keys());
console.log(hash.values());
