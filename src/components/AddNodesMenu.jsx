import React from "react";

const AddNodesMenu = ({ setNodes }) => {
  // Helper function to generate random X position
  const getRandomX = (base, variance) => {
    return base + Math.floor(Math.random() * variance * 2) - variance;
  };

  // Helper function to generate random Y position
  const getRandomY = () => Math.floor(Math.random() * 500);

  // Generic function to add a node
  const addNode = (baseX, variance, type) => {
    setNodes((prevNodes) => {
      const nodeId = prevNodes.length + 1;
      return [
        ...prevNodes,
        {
          id: `${nodeId}`,
          position: { x: getRandomX(baseX, variance), y: getRandomY() },
          data: { title: `${type} ${nodeId}` },
          type: `${type}-node`,
        },
      ];
    });
  };

  return (
    <div className="fixed z-10 flex w-full items-center justify-center gap-4 p-2">
      <Button
        onClick={() => addNode(-600, 50, "Source")}
        label="Add Source"
      />
      <Button
        onClick={() => addNode(600, 50, "Destination")}
        label="Add Destination"
      />
    </div>
  );
};

// Button component for reuse
const Button = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="bg-slate-700 h-10 w-auto px-4 text-white rounded-lg flex items-center justify-center gap-3 active:scale-95 hover:bg-slate-900 transition-all duration-200"
  >
    <span className="font-semibold text-2xl">+</span>{label}
  </button>
);

export default AddNodesMenu;
