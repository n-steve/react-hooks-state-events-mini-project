import React, { useState } from "react";

function CategoryFilter({ categories, setTaskData, tasks }) {
  const [catButton, setCatButton] = useState("All");
  const button = categories.map((category) => (
    <button
      key={category}
      className={category === catButton && "selected"}
      onClick={() => {
        setCatButton(category);

        const filteredCategories = tasks.filter((task) => {
          if (task.category === category) {
            return true;
          } else if (category === "All") {
            return true;
          }
        });
        setTaskData(filteredCategories);
      }}
    >
      {category}
    </button>
  ));
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {button}
    </div>
  );
}

export default CategoryFilter;
