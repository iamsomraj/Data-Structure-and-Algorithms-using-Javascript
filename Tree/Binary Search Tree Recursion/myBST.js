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

	insert(value) {
		this.root = this.insertRecursively(this.root, value);
	}

	insertRecursively(node, value) {
		if (node === null) {
			node = new Node(value);
			return node;
		}

		if (value < node.value) {
			node.left = this.insertRecursively(node.left, value);
		} else {
			node.right = this.insertRecursively(node.right, value);
		}
		return node;
	}

	lookup(value) {
		if (!this.root) {
			console.log("Binary Search Tree : Empty");
			return;
		}
		if (this.lookupRecursively(this.root, value)) {
			console.log("BST : Found");
		} else {
			console.log("BST : Not Found");
		}
		return;
	}

	lookupRecursively(node, value) {
		if (node === null) {
			return false;
		}
		if (value < node.value) {
			return this.lookupRecursively(node.left, value);
		} else if (value > node.value) {
			return this.lookupRecursively(node.right, value);
		} else {
			return true;
		}
	}

	remove(value) {
		if (!this.root) {
			console.log("Binary Search Tree : Empty");
			return;
		}
		this.root = this.removeRecursively(this.root, value);
	}

	removeRecursively(node, value) {
		if (node === null) {
			return node;
		}
		if (value < node.value) {
			node.left = this.removeRecursively(node.left, value);
		} else if (value > node.value) {
			node.right = this.removeRecursively(node.right, value);
		} else {
			if (node.left == null) return node.right;
			else if (node.right == null) return node.left;
			node.value = this.min(node.right);
			node.right = this.removeRecursively(node.right, node.value);
		}
		return node;
	}

	min(node) {
		if (node.left != null) {
			return this.min(node.left);
		}
		return node.value;
	}

	inOrder(node) {
		if (node) {
			this.inOrder(node.left);
			console.log("Node Value : ", node.value);
			this.inOrder(node.right);
		}
   }
   
	preOrder(node) {
		if (node) {
			console.log("Node Value : ", node.value);
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
   }
   
	postOrder(node) {
		if (node) {
			this.postOrder(node.left);
			this.postOrder(node.right);
			console.log("Node Value : ", node.value);
		}
	}

	printTree() {
		console.log(JSON.stringify(this.root));
	}
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(30);
bst.insert(19);
bst.insert(9);
bst.printTree();
bst.inOrder(bst.root);
bst.lookup(19);
bst.remove(19);
bst.lookup(19);
bst.inOrder(bst.root);
