'use strict';
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertice, weight = 0) {
    this.vertice = vertice;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjancyList = new Map();
  }
  addNode(value) {
    this.adjancyList.set(value, []);
  }
  addEdge(start, end, weight) {
    if (!this.adjancyList.has(start) || !this.adjancyList.has(end)) {
      return 'no vertex';
    } else {
      const adjacencies = this.adjancyList.get(start);
      adjacencies.push(new Edge(end, weight));
    }
  }
  getNodes() {
    let array = [];
    for (const [vertex, edge] of this.adjancyList.entries()) {
      array.push([vertex, edge]);
    }
    return array;
  }
  getNeighbors(vertex) {
    if (this.adjancyList.has(vertex)) {
      return this.adjancyList.get(vertex);
    } else {
      return 'not found';
    }
  }
  size() {
    return this.adjancyList.size;
  }
}


// const graph = new Graph();

// const two = new Vertex(2);
// const three = new Vertex(3);
// const six = new Vertex(6);
// const seven = new Vertex(7);
// const eight = new Vertex(8);
// const ten = new Vertex(10);

// graph.addNode(two);
// graph.addNode(three);
// graph.addNode(six);
// graph.addNode(seven);
// graph.addNode(eight);
// graph.addNode(ten);

// graph.addEdge(two, seven);
// graph.addEdge(three, eight);
// graph.addEdge(six, seven);
// graph.addEdge(six, eight);
// graph.addEdge(ten, two);
// graph.addEdge(ten, three);
// graph.addEdge(ten, six);
// graph.addEdge(eight, seven);

// console.log('graph: ', graph);
// console.log('==================================================');

// console.log('graph.size(): ', graph.size());

// console.log('==================================================');
// console.log('graph.getNeighbors(ten): ', graph.getNeighbors(ten));

// console.log('==================================================');
// console.log('graph.getNodes(): ', graph.getNodes());

// console.log('==================================================');
// console.log('graph.getNeighbors(ten): ', graph.getNeighbors(ten));

module.exports = {
  Graph,
  Vertex,
};