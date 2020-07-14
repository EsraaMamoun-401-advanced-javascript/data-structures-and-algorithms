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

  getEdge(list) {
    let neighbors = this.getNeighbors(list[0]);
    for (let i = 0; i < neighbors.length; i++) {
      if (list[1] === neighbors[i].vertice) {
        return `true, ${neighbors[i].weight}$`;
      }
      else return `false, 0$`;
    }
  }

}


const graph = new Graph();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);

graph.addNode(two);
graph.addNode(three);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(eight);
graph.addNode(ten);

graph.addEdge(three, eight, 5);
graph.addEdge(six, seven, 4);
graph.addEdge(six, eight, 2);
graph.addEdge(ten, two, 8);
graph.addEdge(ten, three, 4);
graph.addEdge(ten, six, 7);
graph.addEdge(eight, seven, 1);

console.log(graph.getEdge([three, two]));

module.exports = {
  Graph,
  Vertex,
};