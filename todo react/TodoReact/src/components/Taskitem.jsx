import React from "react";

function TaskItem({ item, onDelete, onToggle }) {
  const { task, completed } = item;

  return (
    <div style={{ color: completed ? 'green' : 'red' }}>
      <span>{task}</span>
      <button onClick={onDelete}>Delete Task</button>
      <button onClick={onToggle}>Toggle Task</button>
    </div>
  );
}

export default TaskItem;