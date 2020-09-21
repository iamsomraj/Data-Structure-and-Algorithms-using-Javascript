class Graph {
	constructor() {
		this.noOfNodes = 0;
		this.adjacencyList = {};
	}

	addNode(node) {
		this.adjacencyList[node] = [];
		this.noOfNodes++;
	}

	addEdge(node0, node1) {
		this.adjacencyList[node0].push(node1);
	}

	printAdjList() {
		for (const node in this.adjacencyList) {
			console.log(node, "-->", this.adjacencyList[node]);
		}
	}
}

const graph = new Graph();
graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 0);
graph.addEdge(1, 3);
graph.addEdge(3, 1);
graph.addEdge(3, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.printAdjList();

// 0 ----- 1
// |       |
// |       |
// |       |
// 2 ----- 3
