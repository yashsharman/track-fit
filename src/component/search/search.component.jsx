import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search.styles.css';
// import { Search as searchIconBootstrap} from 'react-bootstrap-icons';


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
      // if(results.length > 0 ){
      if(results.length > 0 || query !== ""){
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
        <ul className='ul-container'>
          {categories.map((category) => (
            <li className='li-container' key={category}>{category}</li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className='search-container-page'>

     <div className='search-header'>
      <h4 className='all-exercise-heading'>Exercises</h4>
       <Link to='/addnewexercise' className='add-new-link'>
        <button className='add-button'>+</button>
       </Link>
     </div>
      <i className='search-icon'>🔍</i>
      {/* <SearchIcon className='custom-search-icon' /> */}
      <input
        className='input-exercise-container'
        type="text"
        placeholder="Search exercises..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      {searchResults.length > 0 ? (
        searchResults.map((result, index) => (
      <Link
       className='search-category'
       key={index}
       to={`/record-exercise/${result}`}  // redirect to RecordExercise with exercise name
       style={{ textDecoration: 'none', color: 'black' }}
      >
      <h4>{result}</h4>
      </Link>
  ))
) : (
        <>
        <div className='main-category-text'>
        {showMainCategories()}
        </div>
          <p className='no-result'>No results found.</p>
          <p className='addnewexercise'>
         <Link to="/addnewexercise">add new exercise</Link>.
          </p>
          
        </>
      )}
    </div>
  );
};

export default Search;
  




