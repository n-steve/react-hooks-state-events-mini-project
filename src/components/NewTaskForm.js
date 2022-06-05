import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  //{onTaskFormSubmit}
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function submitForm(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  const categoryForm = categories.filter((cat) => {
    if (cat !== "All") return true;
  });

  return (
    <form className="new-task-form" onSubmit={submitForm}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categoryForm.map((newCat) => (
            <option key={newCat}>{newCat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
