class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	// inserts a node at a specific place of binary search tree
	// complexity - logarithmic time in most case, linear in worst
	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return;
		}
		let current = this.root;
		while (true) {
			if (value < current.value) {
				if (!current.left) {
					current.left = newNode;
					return;
				}
				current = current.left;
			} else {
				if (!current.right) {
					current.right = newNode;
					return;
				}
				current = current.right;
			}
		}
	}

	// looks up a value in the binary search tree
	// compl: log. time in most cases, but in worst, it can be linear
	lookup(value) {
		if (!this.root) {
			console.log("Binary Search Tree : Empty");
			return;
		}

		let current = this.root;
		while (true) {
			if (value < current.value) {
				if (!current.left) {
					console.log("Binary Search Tree : Not found");
					return false;
				}
				current = current.left;
			} else if (value > current.value) {
				if (!current.right) {
					console.log("Binary Search Tree : Not found");
					return false;
				}
				current = current.right;
			} else {
				console.log(current);
				return current;
			}
		}
	}


	// removes a node from the binary search tree
	// compl: log. time in most cases, but in worst, it can be linear
	remove(value) {
		if (!this.root) {
			return false;
		}
		let current = this.root;
		let parentNode = null;
		while (current) {
			if (value < current.value) {
				parentNode = current;
				current = current.left;
			} else if (value > current.value) {
				parentNode = current;
				current = current.right;
			} else if (current.value === value) {
				//We have a match, get to work!
				//Option 1: No right child:
				if (current.right === null) {
					if (parentNode === null) {
						this.root = current.left;
					} else {
						//if parent > current value, make current left child a child of parent
						if (current.value < parentNode.value) {
							parentNode.left = current.left;
							//if parent < current value, make left child a right child of parent
						} else if (current.value > parentNode.value) {
							parentNode.right = current.left;
						}
					}
					//Option 2: Right child which doesnt have a left child
				} else if (current.right.left === null) {
					current.right.left = current.left;
					if (parentNode === null) {
						this.root = current.right;
					} else {
						//if parent > current, make right child of the left the parent
						if (current.value < parentNode.value) {
							parentNode.left = current.right;
							//if parent < current, make right child a right child of the parent
						} else if (current.value > parentNode.value) {
							parentNode.right = current.right;
						}
					}
					//Option 3: Right child that has a left child
				} else {
					//find the Right child's left most child
					let leftmost = current.right.left;
					let leftmostParent = current.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}
					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = current.left;
					leftmost.right = current.right;
					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (current.value < parentNode.value) {
							parentNode.left = leftmost;
						} else if (current.value > parentNode.value) {
							parentNode.right = leftmost;
						}
					}
				}
				return true;
			}
		}
	}


	printTree() {
		if (this.root) {
			console.log(JSON.stringify(this.root));
		} else {
			console.log("Binary Search Tree : Empty");
		}
	}
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(1);
tree.insert(20);
tree.insert(8);
tree.insert(9);
tree.insert(12);
tree.remove(10);
tree.printTree();
