// tree.jsx
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Tree = ({ data }) => { // Changed the component name to Tree to avoid conflict
  const svgRef = useRef();

  useEffect(() => {
    const width = 800;
    const height = 400;

    // Create the SVG element
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('border', '1px solid black');

    // Create a root node
    const root = d3.hierarchy(data);

    // Create a tree layout
    const treeLayout = d3.tree().size([height, width - 160]);
    treeLayout(root);

    // Clear previous links and nodes
    svg.selectAll('*').remove();

    // Draw links
    svg.selectAll('.link')
      .data(root.links())
      .enter()
      .append('line')
      .attr('class', 'link')
      .attr('x1', d => d.source.y)
      .attr('y1', d => d.source.x)
      .attr('x2', d => d.target.y)
      .attr('y2', d => d.target.x)
      .style('stroke', '#ccc');

    // Draw nodes
    const nodes = svg.selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y}, ${d.x})`);

    nodes.append('circle')
      .attr('r', 5)
      .style('fill', 'steelblue');

    nodes.append('foreignObject')
      .attr('width', 100)
      .attr('height', 50)
      .append('xhtml:div')
      .style('color', 'black')
      .html(d => `
        <div style="background: lightgray; padding: 5px; border-radius: 5px; text-align: center;">
          ${d.data.name}
        </div>
      `);

  }, [data]);

  return (
    <svg ref={svgRef}></svg>
  );
};

const BinaryTree = () => {
  const data = {
    name: 'Root Node',
    children: [
      {
        name: 'Child Node 1',
        children: [
          {
            name: 'Grandchild Node 1',
            children: [],
          },
          {
            name: 'Grandchild Node 2',
            children: [],
          },
        ],
      },
      {
        name: 'Child Node 2',
        children: [],
      },
    ],
  };

  return (
    <div>
      <h1>Binary Tree with D3</h1>
      <Tree data={data} /> {/* Using the renamed component here */}
    </div>
  );
};

export default BinaryTree;
