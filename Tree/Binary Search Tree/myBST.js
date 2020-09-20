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

	printTree() {
		if (this.root) {
			console.log(JSON.stringify(this.root));
		}
	}
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(1);
tree.insert(20);
tree.insert(8);
tree.insert(9);
tree.insert(12);
tree.lookup(19);
tree.printTree();
