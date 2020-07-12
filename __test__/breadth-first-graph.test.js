'use strict';

const Graphs = require('../challenges/breadthFirst/breadth-first');

jest.spyOn(global.console, 'log');

describe('Graph Class: breadth_first Method', () => {

  const graph = new Graphs.Graph();

  const two = new Graphs.Vertex(2);
  const three = new Graphs.Vertex(3);
  const six = new Graphs.Vertex(6);
  const seven = new Graphs.Vertex(7);
  const eight = new Graphs.Vertex(8);
  const ten = new Graphs.Vertex(10);

  graph.addVertex(two);
  graph.addVertex(three);
  graph.addVertex(six);
  graph.addVertex(seven);
  graph.addVertex(eight);
  graph.addVertex(ten);

  graph.addDirectedEdge(two, seven);
  graph.addDirectedEdge(three, eight);
  graph.addDirectedEdge(six, seven);
  graph.addDirectedEdge(six, eight);
  graph.addDirectedEdge(ten, two);
  graph.addDirectedEdge(ten, three);
  graph.addDirectedEdge(ten, six);
  graph.addDirectedEdge(eight, seven);
    
  it('An edge can be successfully added to the graph', () => {
    graph.breadth_first(ten);
    expect(console.log).toHaveBeenCalled();
  });
});