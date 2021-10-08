import React from "react";
import Task from "../component/Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle = {onToggle} />
      ))}
    </div>
  );
};

export default Tasks;
