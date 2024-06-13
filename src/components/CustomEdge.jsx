import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";
import crossImg from "../assets/cross.svg";

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  targetPosition,
  sourcePosition,
}) => {
  const { setEdges } = useReactFlow();

  // Deletes an edge by filtering out the current edge's id
  const handleEdgeDelete = () => {
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id));
  };

  // Calculate the Bezier path and label coordinates for the edge
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    targetPosition,
    sourcePosition,
  });

  // Inline styles for the delete button
  const deleteButtonStyle = {
    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
    pointerEvents: "all",
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <DeleteButton style={deleteButtonStyle} onClick={handleEdgeDelete} />
      </EdgeLabelRenderer>
    </>
  );
};

// Delete button
const DeleteButton = ({ style, onClick }) => (
  <button
    className="h-8 w-8 absolute opacity-30 hover:opacity-100 nodrag nopans"
    style={style}
    onClick={onClick}
  >
    <img
      className="h-full w-full object-contain"
      src={crossImg}
      alt="cross"
    />
  </button>
);

export default CustomEdge;
