import React from 'react';
import './addnewexercise.styles.css';
import { useState } from 'react';

function AddNewExercisePage () {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  
  const handleAddCategory = () => {
    setCategory(newCategory); // Set the new category in the form
    setShowAddCategory(false); // Hide the comment box
    setNewCategory(''); // Clear the new category input
  };

  return (
    <div className='new-exercise-container'>
      <h2>Add New Exercise</h2>
      <div className='name-input-container'>
        <input
          type="text"
          placeholder="Name"
          className='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='category-input-container'>
        <input
          type="text"
          placeholder="Category"
          className='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        {!showAddCategory ? (
          <button className='btn-plus' onClick={() => setShowAddCategory(true)}>
            +
          </button>
        ) : (
          <div className='new-category-container'>
            <input
              type="text"
              placeholder="New Category"
              className='new-category-input'
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button className='save' onClick={handleAddCategory}>Save</button>
            <button className='cancel' onClick={() => setShowAddCategory(false)}>Cancel</button>
          </div>
        )}
      </div>
      <div className='type-input-container'>
        <input
          type="text"
          placeholder="Type"
          className='type'
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      </div>
  );
 }

   export default AddNewExercisePage;