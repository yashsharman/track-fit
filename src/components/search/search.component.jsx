import React, { useState } from 'react';

const Search = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  // Function to handle search input changes
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the data based on the search query
    const filteredResults = data.reduce((acc, item) => {
      const filteredSubcategories = item.subcategories.filter(subcat =>
        subcat.toLowerCase().includes(query.toLowerCase())
      );

      if (filteredSubcategories.length > 0) {
        acc.push({
          category: item.category,
          subcategories: filteredSubcategories,
        });
      }

      return acc;
    }, []);

    // Update the search results state
    setSearchResults(filteredResults);

    // Reset the active category when the search query changes
    setActiveCategory(null);
  };

  // Function to toggle the visibility of subcategories for a main category
  const toggleSubcategories = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
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
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>
            <strong onClick={() => toggleSubcategories(item.category)}>
              {item.category}
            </strong>
            {activeCategory === item.category && (
              <ul>
                {item.subcategories.map((subcat, subIndex) => (
                  <li key={subIndex}>{subcat}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
