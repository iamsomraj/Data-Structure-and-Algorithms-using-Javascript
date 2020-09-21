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
		// check if empty
		if (!this.root) {
			console.log("Binary Search Tree : Empty");
			return;
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
			} else if (value === current.value) {
				console.log("Binary Search Tree : Node deleted : ", value);
				// no right child
				if (current.right === null) {
					if (parentNode === null) {
						this.root = current.left;
					} else if (current.value < parentNode.value) {
						parentNode.left = current.left;
					} else {
						parentNode.right = current.left;
					}
					// no right child's left child
				} else if (current.right.left === null) {
					current.right.left = current.left;
					if (parentNode === null) {
						this.root = current.right;
					} else if (current.value < parentNode.value) {
						parentNode.left = current.right;
					} else {
						parentNode.right = current.right;
					}
					// have right child's left child
				} else {
					let leftMost = current.right.left;
					let letfMostParent = current.right;
					// find the minimum
					while (leftMost.left !== null) {
						letfMostParent = leftMost;
						leftMost = leftMost.left;
					}
					// parent's left is now leftmost's right
					letfMostParent.left = leftMost.right;
					// leftmost's left and right child is now current's left and right
					leftMost.left = current.left;
					leftMost.right = current.right;

					if (parentNode === null) {
						this.root = leftMost;
					} else if (current.value < parentNode.value) {
						parentNode.left = leftMost;
					} else {
						parentNode.right = leftMost;
					}
				}
				return true;
			}
		}
		console.log("Binary Search Tree : Deletion Failed");
		return false;
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
tree.insert(25);
tree.insert(9);
tree.insert(50);
tree.insert(20);
tree.insert(19);
tree.insert(21);
tree.insert(90);
tree.insert(30);
tree.insert(27);
tree.insert(40);
tree.insert(90);
tree.insert(100);
tree.insert(70);
tree.remove(85);
tree.printTree();
