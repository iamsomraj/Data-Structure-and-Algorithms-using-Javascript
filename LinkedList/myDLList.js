class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    }
    if (index <= 0) {
      this.prepend(value);
    }
    let leader = this.traverseToTheIndex(index - 1);
    let follower = leader.next;
    const newNode = new Node(value);
    newNode.prev = leader;
    leader.next = newNode;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
  }

  remove(index) {
    if (index <= 0 || index >= this.length) {
      return;
    }
    let leader = this.traverseToTheIndex(index - 1);
    let unwantedNode = leader.next;
    let follower = unwantedNode.next;
    const value = unwantedNode.value;
    leader.next = follower;
    follower.prev = leader;
    this.length--;
    return value;
  }

  traverseToTheIndex(index) {
    let pointer = this.head;
    let count = 0;
    while (count !== index) {
      pointer = pointer.next;
      count++;
    }
    return pointer;
  }

  toString() {
    const arr = [];
    let pointer = this.head;
    while (pointer != null) {
      arr.push(pointer.value);
      pointer = pointer.next;
    }
    return (
      "DoublyLinkedList " +
      arr +
      "\n" +
      "Head " +
      this.head.value +
      "\n" +
      "Tail " +
      this.tail.value +
      "\n" +
      "Length " +
      arr.length
    );
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(15);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
console.log("Before insert:", myLinkedList.toString(), "\n");
myLinkedList.insert(2, 22);
console.log("After insert:", myLinkedList.toString(), "\n");
console.log("Remove 2 index:", myLinkedList.remove(2));
console.log(myLinkedList.toString());
