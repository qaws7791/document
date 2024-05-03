class Graph {
  constructor() {
    this.adjacencyMatrix = {};
  }

  addVertex(vertex) {
    this.adjacencyMatrix[vertex] = [];
  }

  removeVertex(vertex) {
    delete this.adjacencyMatrix[vertex];

    for (const v in this.adjacencyMatrix) {
      this.adjacencyMatrix[v] = this.adjacencyMatrix[v].filter(
        (e) => e !== vertex
      );
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyMatrix[vertex1].push(vertex2);
    this.adjacencyMatrix[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyMatrix[vertex1] = this.adjacencyMatrix[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyMatrix[vertex2] = this.adjacencyMatrix[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  print() {
    for (const vertex in this.adjacencyMatrix) {
      console.log(`${vertex}: ${this.adjacencyMatrix[vertex].join("")}`);
    }
  }
}

const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "C");

// graph.print();
// console.log("Removing edge A-B");
// graph.removeEdge("A", "B");
// graph.print();

// console.log("Removing vertex A");
// graph.removeVertex("A");
// graph.print();

["A", "B", "C", "D", "E", "F"].forEach((v) => graph.addVertex(v));

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

graph.print();

function depthFirstSearch(graph, start) {
  const visited = new Set();
  const stack = [start];
  const result = [];
  while (stack.length) {
    const vertex = stack.pop();

    if (visited.has(vertex)) {
      continue;
    }

    result.push(vertex);
    visited.add(vertex);

    for (const neighbor of graph[vertex]) {
      stack.push(neighbor);
    }
  }
  console.log(result.join(", "));
}

// depthFirstSearch(graph.adjacencyMatrix, "A");

function breadthFirstSearch(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];
  while (queue.length) {
    const vertex = queue.shift();

    if (visited.has(vertex)) {
      continue;
    }

    result.push(vertex);
    visited.add(vertex);

    for (const neighbor of graph[vertex]) {
      queue.push(neighbor);
    }
  }
  console.log(result.join(", "));
}

breadthFirstSearch(graph.adjacencyMatrix, "A");
