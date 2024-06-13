import { CustomEdge, DestinationNode, SourceNode } from "../components";

// Helper function to create node objects more concisely
const createNode = (id, x, y, title, type) => ({
  id: id.toString(),
  position: { x, y },
  data: { title },
  type,
});

// Initial set of nodes
export const initialNodes = [
  createNode(1, -300, 100, "Source 1", "source-node"),
  createNode(2, -400, 200, "Source 2", "source-node"),
  createNode(3, -500, 300, "Source 3", "source-node"),
  createNode(4, 500, 100, "Destination 1", "destination-node"),
  createNode(5, 500, 400, "Destination 2", "destination-node"),
];

// Initial set of edges
export const initialEdges = [];

// Mapping of node types to their respective component
export const nodeTypes = {
  "source-node": SourceNode,
  "destination-node": DestinationNode,
};

// Mapping of edge types to their respective component
export const edgeTypes = {
  "custom-edge": CustomEdge,
};
