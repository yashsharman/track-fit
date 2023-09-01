import React from 'react';
import './addnewexercise.styles.css';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import ShowComment from '../showComment/ShowComment.compenent';


function AddNewExercisePage ({ selectedRecordObj, CommentBoxVisibility, addComment }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  // const [showAddCategory, setShowAddCategory] = useState(false); 
  /* const [newCategory, setNewCategory] = useState(''); */
  const [selected, setSelected] = useState();
  const [showComment, setshowComment] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  // const [commentText, setCommentText] = useState(selectedRecordObj.comment || '');
  
  const handleShowComment = () => {
    setshowComment(true);
  }

  /* const options = ['Abs', 'Back', 'Triceps', 'Shoulder']  */  
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
          value={selected}
        />

       <div className='dropdown-btn'>

          <select value={selected} 
               className='dropdown-text'
               onChange={e=>setSelected(e.target.value)}
               >
               <option></option>
               <option>Abs</option>
               <option>Back</option>
               <option>Biceps</option>
               <option>Cardio</option>
               <option>Chest</option>
               <option>Legs</option>
               <option>Shoulder</option>
               <option>Triceps</option>
          </select>

        <button 
              className='new-ctegory-btn'
              onClick={handleShowComment}>
         <FontAwesomeIcon icon={faSquarePlus} />
        </button>
   
        {showComment && <ShowComment  
          // CommentBoxVisibility={CommentBoxVisibility}
          // addComment={addComment}
          // selectedRecordObj={selectedRecordObj}
          />} 
    
       </div> 
       
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

        {/*     {!showAddCategory ? (
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
        
          </div> */}
       {/*  )} */}
      {/* </div> */}
    