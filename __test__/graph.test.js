'use strict';

const Graphs = require('../challenges/graph/graph');
describe('Graph Class', () => {
  const graph = new Graphs.Graph();

  const two = new Graphs.Vertex(2);
  const three = new Graphs.Vertex(3);
  const six = new Graphs.Vertex(6);
  const seven = new Graphs.Vertex(7);
  const eight = new Graphs.Vertex(8);
  const ten = new Graphs.Vertex(10);
  graph.addNode(two);
  graph.addNode(three);
  graph.addNode(six);
  graph.addNode(seven);
  graph.addNode(eight);
  graph.addNode(ten);
  graph.addEdge(two, seven);
  graph.addEdge(three, eight);
  graph.addEdge(six, seven);
  graph.addEdge(six, eight);
  graph.addEdge(ten, two);
  graph.addEdge(ten, three);
  graph.addEdge(ten, six);
  graph.addEdge(eight, seven);
    
  it('Node can be successfully added to the graph', () => {
    expect(graph.adjancyList.has(six)).toBeTruthy();
  });
  it('An edge can be successfully added to the graph', () => {
    expect(graph.adjancyList.get(two)).toEqual([{'vertice': {'value': 7}, 'weight': 0}]);
  });
});