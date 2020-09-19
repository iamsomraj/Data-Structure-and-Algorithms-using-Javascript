class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(value) {
    this.top = new Node(value);
    this.bottom = this.top;
    this.length = 1;
  }

  // adds the element to the top
  // constant time complexity
  push(value = null) {
    if (!value) {
      console.log("Cannot push to the stack: Value Empty");
      return;
    }
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  // removes the element from the top of the stack
  // constant time complex...
  pop() {
    if (this.isEmpty()) {
      console.log("Cannot pop from the stack : Stack Empty");
      return;
    }
    // for the last element
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const unWantedNode = this.top;
    console.log("Value popped : ", unWantedNode.value);
    this.top = this.top.next;
    this.length--;
  }

  // traverse through the list
  // linear time
  traverse() {
    if (!this.top) {
      console.log("Cannot traverse : Stack Empty");
      return;
    }
    let leader = this.top;
    console.log("Stack displayed : ");
    while (leader) {
      console.log(leader.value);
      leader = leader.next;
    }
  }

  // returns the top element from the stack
  // constant time
  peek() {
    if (this.isEmpty()) {
      console.log("Cannot peek from the stack : Stack Empty");
      return;
    }
    console.log("Peek Node value : ",this.top.value);
    return this.top;
  }

  // checks if the stack is empty
  // constant time complexity
  isEmpty() {
    if (!this.top && !this.bottom) {
      return true;
    }
    return false;
  }
}

const stack = new Stack(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.traverse();
stack.peek();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.peek();
console.log(stack);
