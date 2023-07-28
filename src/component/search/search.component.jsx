import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search input changes
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    let filteredResults = [];
    const categories = Object.keys(data);
    categories.map((category) => {
      let results = data[category].filter((subcat) =>
        subcat.toLowerCase().includes(query.toLowerCase())
      );
      if (results.length > 0 && query !== "") {
        filteredResults.push(...results);
      }
    });
    console.log(filteredResults);

    // Update the search results state
    setSearchResults(filteredResults);

    // // Reset the active category when the search query changes
    // setActiveCategory(null);
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search exercises..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="searchInput"
      />

      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Link to="/record-exercise">
              <h4>{result}</h4>
            </Link>
          );
        })
      ) : (
        <h4>{Object.keys(data)}</h4>
      )}
    </div>
  );
};

export default Search;
