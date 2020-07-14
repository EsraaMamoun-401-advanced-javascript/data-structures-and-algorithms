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
  graph.addEdge(two, seven, 17);
  graph.addEdge(three, eight, 88);
  graph.addEdge(six, seven, 6);
  graph.addEdge(six, eight, 9);
  graph.addEdge(ten, two, 6);
  graph.addEdge(ten, three, 33);
  graph.addEdge(ten, six, 95);
  graph.addEdge(eight, seven, 79);
  
  it('Node can be successfully added to the graph', () => {
    expect(graph.adjancyList.has(six)).toBeTruthy();
  });
  it('An edge can be successfully added to the graph', () => {
    expect(graph.adjancyList.get(two)).toEqual([{'vertice': {'value': 7}, 'weight': 17}]);
  });
  it('Get edge from the graph true', () => {
    expect(graph.getEdge([eight, seven])).toEqual('true, 79$');
  });
  it('Get edge from the graph false', () => {
    expect(graph.getEdge([eight, two])).toEqual('false, 0$');
  });
});