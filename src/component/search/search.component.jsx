import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search.styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery(""); //clear searchQuery
  };

  const filterResults = () => {
    if (searchQuery === "") {
      return [];
    }

    let filteredResults = [];
    const categories = Object.keys(data);

    categories.forEach((category) => {
      const results = data[category].filter((subcat) =>
        subcat.toLowerCase().includes(searchQuery.toLowerCase())
      );

      filteredResults.push(...results);
    });

    return filteredResults;
  };

  const searchResults = filterResults();

  return (
    <div className='search-container-page'> 
      <div className='search-header'>
        <h4 className='all-exercise-heading'>Exercises</h4>
        <Link to='/addnewexercise' className='add-new-link'>
          <button className='add-button'>+</button>
        </Link>
      </div>

      <div className='search-div'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          className='input-exercise-container'
          type="search"
          placeholder="Search exercises..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      {!searchResults.length && !selectedCategory && (
        <div className='main-category-text'>
          <ul className='ul-container'>
            {Object.keys(data).map((category) => (
              <li
                className='li-container'
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedCategory && (
        <div className='subcategories-container'>
          <ul className='subcategories-list'>
            {data[selectedCategory].map((subcategory, index) => (
              <li 
              className='subcategory-item' 
              key={index}>
                {subcategory}
              </li>
            ))}
          </ul>
        </div>
      )}

      {searchResults.length > 0 && (
        <div className='search-results'>
          {searchResults.map((result, index) => (
            <Link
              className='search-category'
              key={index}
              to={`/record-exercise/${result}`} // Redirect to RecordExercise with exercise name
            >
              <h4>{result}</h4>
            </Link>
          ))}
        </div>
      )}

      {!searchResults.length && selectedCategory && (
        <p className='no-result'>No results found. 
        <Link to="/addnewexercise">addnewexercise</Link>.</p>
      )}
    </div>
  );
};

export default Search;
   




