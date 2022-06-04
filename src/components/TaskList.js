import React, { useState } from "react";

import Task from "./Task";

function TaskList({ tasks }) {
  const [taskData, setTaskData] = useState(tasks);

  // function addTask(newTask){
  //   setTaskData([...taskData,newTask])
  // } need to pass this function as a prop to NewTaskForms onTaskFormSubmit={addTask}

  function handleRemoveTask(removeTask) {
    const display = taskData.filter((task) => {
      if (task.text !== removeTask) return true;
    });
    setTaskData(display);
  }

  return (
    <div className="tasks">
      {taskData.map((task) => (
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
