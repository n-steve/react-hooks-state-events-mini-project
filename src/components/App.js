import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
function App() {
  const [taskData, setTaskData] = useState(TASKS);

  function addTask(newTask) {
    setTaskData([...taskData, newTask]);
  }

  function handleRemoveTask(removeTask) {
    const display = taskData.filter((task) => {
      if (task.text !== removeTask) return true;
    });
    setTaskData(display);
  }

  console.log({ taskData });
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setTaskData={setTaskData}
        tasks={TASKS}
      />
      <NewTaskForm
        categories={CATEGORIES}
        tasks={TASKS}
        onTaskFormSubmit={addTask}
      />
      <TaskList tasks={taskData} handleRemoveTask={handleRemoveTask} />
    </div>
  );
}

export default App;
