import React from "react";

import Task from "./Task";

function TaskList({ tasks, handleRemoveTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          handleRemoveTask={handleRemoveTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
