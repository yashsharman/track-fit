import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      if(results.length > 0 ){
        filteredResults.push(...results)

      }
      return filteredResults;
    });
    console.log(filteredResults);

    // Update the search results state
    setSearchResults(filteredResults);
  };

  const showMainCategories = () => {
    const categories = Object.keys(data);
    return (
      <>
        {/* <h4>Main Categories</h4> */}
        <ul>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search exercises..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      {searchResults.length > 0 ? (
        searchResults.map((result) => <h4>{result}</h4>)
      ) : (
        <>
          <h4>No results found.</h4>
          <p>
            You can <Link to="/addnewexercise">add new exercise</Link>.
          </p>
          {showMainCategories()}
        </>
      )}
    </div>
  );
};

export default Search;
  




