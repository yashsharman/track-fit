import React, { useState } from 'react';

const SearchBar = ({ data, onSearch }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query, selectedCategory);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Category1">Abs</option>
        <option value="Category2">Back</option>
        <option value="Category2">Biceps</option>
        <option value="Category2">Cardio</option>
        <option value="Category2">Chest</option>
        <option value="Category2">Legs</option>
        <option value="Category2">Shoulders</option>
        <option value="Category2">Triceps</option>
        
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
