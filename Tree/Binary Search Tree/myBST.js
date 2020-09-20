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

	// finds a node containing min value from a tree
	// compl: log. time in most cases, but in worst, it can be linear
	min(current) {
		while (true) {
			if (!current.left) {
				return current;
			} else {
				current = current.left;
			}
		}
	}

	// // removes a node from the binary search tree
	// // compl: log. time in most cases, but in worst, it can be linear
	// remove(value) {
	// 	if (!this.root) {
	// 		console.log("Binary Search Tree : Empty");
	// 		return;
	// 	}
	// 	let current = this.root;
	// 	while (true) {
	// 		if (value < current.value) {
	// 			if (!current.left) {
	// 				console.log("Binary Search Tree : Not Found");
	// 				return;
	// 			}
	// 			current = current.left;
	// 		} else if (value > current.value) {
	// 			if (!current.right) {
	// 				console.log("Binary Search Tree : Not Found");
	// 				return;
	// 			}
	// 			current = current.right;
	// 		} else {
	// 			console.log("BST Node deleted : ", current.value);
	// 			if (!current.left && !current.right) {
	// 				// case 1 : no child
	// 				return null;
	// 			} else if (current.left && !current.right) {
	// 				// case 2: one left child
	// 				return current.left;
	// 			} else if (!current.left && current.right) {
	// 				// case 3: one right child
	// 				return current.right;
	// 			} else if (current.left && current.right) {
	// 				// case 4: two children
	// 				const minNode = this.min(current.right);
	// 				current.value = minNode.value;
	// 				if (minNode.right) {
	// 					const del = minNode.right.value;
	// 					current.right = current.right.remove(del);
	// 				}
	// 				return current;
	// 			}
	// 		}
	// 	}
	// }

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
// tree.remove(10);
tree.printTree();
