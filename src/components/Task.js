import React from "react";

function Task({ text, category, handleRemoveTask }) {
  function removeButton() {
    handleRemoveTask(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={removeButton}>
        X
      </button>
    </div>
  );
}

export default Task;
