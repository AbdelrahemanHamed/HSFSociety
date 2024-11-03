import React, { useState } from "react";
import ReactFlow, { MiniMap, Controls } from "react-flow-renderer";
import Card from "./Card"; // Assuming Card is your custom node component

const initialParents = [
  {
    id: "1",
    data: { label: "Abdelraheman Hamed", lineWidth: 1400, heightLine: 95 },
    position: { x: 250, y: 0 },
    type: "custom",
  },
  {
    id: "2",
    data: { label: "Director A", lineWidth: 800, heightLine: 95 },
    position: { x: -450, y: 300 },
    type: "custom",
  },
  {
    id: "3",
    data: { label: "Director B", lineWidth: 800, heightLine: 95 },
    position: { x: 950, y: 300 },
    type: "custom",
  },
];

const initialChildren = []; // Start with an empty array for children

const getPosition = (parentPosition, childIndex, position) => {
  const siblingWidth = 300; // Adjust the width between siblings
  const parentX = parentPosition.x;
  const parentY = parentPosition.y + 100; // Fixed distance between parent and child

  // Calculate the x position based on left or right
  const xOffset = position === 'L' ? -siblingWidth / 2 : siblingWidth / 2;

  return {
    x: parentX + xOffset + (childIndex * siblingWidth), // Position children in line
    y: parentY,
  };
};

const Network = () => {
  const [parents, setParents] = useState(initialParents);
  const [children, setChildren] = useState(initialChildren);

  const addChild = (parentId, position) => {
    const parentNode = parents.find((node) => node.id === parentId);
    if (!parentNode) return;

    // Count how many children the parent already has
    const childrenCount = children.filter((child) => child.parentId === parentId).length;

    // Limit the number of children to 2
    if (childrenCount >= 2) {
      alert("This parent already has 2 children.");
      return;
    }

    // Calculate position for new child
    const newPosition = getPosition(parentNode.position, childrenCount, position);

    // Create new child node
    const newChild = {
      id: `child-${Date.now()}`, // Unique ID for new child
      data: { label: `Child of ${parentNode.data.label}`, lineWidth: 450, heightLine: 95 },
      position: newPosition,
      type: "custom",
      parentId: parentId, // Link child to parent
    };

    setChildren((prevChildren) => [...prevChildren, newChild]);
  };

  // Combine parents and children for rendering
  const nodes = [...parents, ...children];

  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#282c34" }}>
      <ReactFlow
        nodes={nodes}
        edges={parents.flatMap((parent) => 
          children.map((child) => ({
            id: `e${parent.id}-${child.id}`,
            source: parent.id,
            target: child.id,
            type: "smoothstep",
            style: { stroke: "white" },
          }))
        )}
        nodeTypes={{ custom: Card }}
        fitView
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        zoomOnScroll={true}
        zoomOnPinch={true}
        minZoom={0.1}
        maxZoom={2}
      >
        <MiniMap
          nodeStrokeColor={() => "#fff"}
          nodeColor={() => "#555"}
          nodeBorderRadius={2}
          maskColor="rgba(255, 255, 255, 0.1)"
        />
        <Controls />
      </ReactFlow>
      <button onClick={() => addChild("1", 'L')}>Add Left Child to Root</button>
      <button onClick={() => addChild("1", 'R')}>Add Right Child to Root</button>
      <button onClick={() => addChild("2", 'L')}>Add Left Child to Director A</button>
      <button onClick={() => addChild("2", 'R')}>Add Right Child to Director A</button>
      <button onClick={() => addChild("3", 'L')}>Add Left Child to Director B</button>
      <button onClick={() => addChild("3", 'R')}>Add Right Child to Director B</button>
    </div>
  );
};

export default Network; 