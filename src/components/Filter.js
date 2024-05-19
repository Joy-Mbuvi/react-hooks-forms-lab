import React, { useState, useEffect } from "react";

function Filter({ search = "", onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState(search || "");

  useEffect(() => {
    setSearchText(search || ""); 
  }, [search]);

  function handleInputChange(event) {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    onSearchChange(newSearchText);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
