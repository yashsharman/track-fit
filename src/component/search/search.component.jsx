import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { defaultExercise } from '../../App';
import './search.styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const data = useContext(defaultExercise)
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [noSearchResults, setNoSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery(""); //clear searchQuery
  };

 //console.log(document.querySelector(".main-category-text"))
  useEffect(() => {
    const filteredResults = () => {
      if(searchQuery === "") {
        setNoSearchResults(false);
        setSearchResults([]);
        return;
      }
    
    let filteredResults = [];
    const categories = Object.keys(data);

     categories.forEach((category) => {
      const results = data[category].filter((subcat) =>
        subcat.toLowerCase().includes(searchQuery.toLowerCase())
      );

      filteredResults.push(...results);
    }); 

    if (selectedCategory) {
      const results = data[selectedCategory].filter((subcat) =>
        subcat.toLowerCase().includes(searchQuery.toLowerCase())
      );
      filteredResults = results;
    }

    setSearchResults(filteredResults);
    setNoSearchResults(
      searchQuery !== "" &&
        filteredResults.length === 0 &&
        !categories.some((category) =>
          category.toLowerCase().includes(searchQuery.toLowerCase())
        ) 
      );
  };
    
    filteredResults();

    if(searchQuery === "") {
      // setSelectedCategory(null);
    }
  }, [searchQuery]);
 
  return (
    <div className='search-container-page'> 
      <div className='search-header'>
        <h2 className='all-exercise-heading'>Exercises</h2>
        <Link to='/addnewexercise' className='add-new-link'>
          <button className='add-button'>
          <FontAwesomeIcon icon={faSquarePlus} />
          </button>
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

      {!searchResults.length && !selectedCategory && !noSearchResults &&(
        <div className='main-category-text'>
          <ul className='ul-container'>

            {data && Object.keys(data).map((category) => (
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

      {/* {selectedCategory && (
        
      )} */}
      {selectedCategory ? (<div className='subcategories-container'>
          <ul className='subcategories-list'>
            {data[selectedCategory].map((subcategory, index) => (
              <li 
              className='subcategory-item' 
              key={index}
              >
                {subcategory}
              </li>
            ))}
          </ul>
        </div>):
        (
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
        )
        }

      {/* {searchResults.length > 0 && } */}

      {noSearchResults  && (
        <p className='no-result'>
          No exercises found.
         <br /> 
          Tap on + button to add new exercise.
        </p>
      )}
    </div>
  );
}

export default Search;
