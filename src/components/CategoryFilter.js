import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [catButton, setCatButton] = useState("All");
  const button = categories.map((category) => (
    <button
      key={category}
      className={category === catButton ? "selected" : null}
      onClick={() => setCatButton(category)}
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
