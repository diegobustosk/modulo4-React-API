import React, { useState } from "react";

function Search({ setSearchQuery }) {

  const [inputValue, setInputValue] = useState("");

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle the search button click
  const handleSearchClick = () => {
    // Update the search query in the parent component (App.js)
    setSearchQuery(inputValue);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon by Name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default Search;