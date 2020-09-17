class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
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
    let pointer = this.traverseToTheIndex(index - 1);
    const newNode = new Node(value);
    newNode.next = pointer.next;
    pointer.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index <= 0 || index >= this.length) {
      return;
    }
    let pointer = this.traverseToTheIndex(index - 1);
    const value = pointer.next.value;
    pointer.next = pointer.next.next;
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
      "LinkedList " +
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
myLinkedList.insert(2, 22);
console.log(myLinkedList.toString());
console.log("Remove 2 index", myLinkedList.remove(2));
console.log(myLinkedList.toString());
