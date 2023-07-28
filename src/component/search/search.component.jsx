import React, { useState } from 'react';

const Search = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // const [activeCategory, setActiveCategory] = useState(null);

  // Function to handle search input changes
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

let filteredResults = [];
    const categories = Object.keys(data);
    categories.map((category) => {
      let results=data[category].filter((subcat) =>
        subcat.toLowerCase().includes(query.toLowerCase())
      );
      if(results.length > 0){
        filteredResults.push(...results)

      }
      return filteredResults;
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
      />

      { searchResults.length > 0 ?
        searchResults.map((result)=>{
               return (<h4>{result}</h4>) })
                : <h4>{Object.keys(data)}</h4>
      }
     
    </div>
  );
};

export default Search;

