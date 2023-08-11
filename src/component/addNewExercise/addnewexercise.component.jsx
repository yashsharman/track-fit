import React from 'react';
import './addnewexercise.styles.css';

function AddNewExercisePage() {
  return (
    <div className='main-div'>
     <div className=''>
      <h4>New Exercise</h4>

      <div className='div-name'>
      <input 
        placeholder='NAME'
        className='name'
      />
      </div>     
      
      <div className='div-category'>
      <input 
        placeholder='CATEGORY'
        className='category'
      />
      </div>
      
      <div className='div-type'>
      <input 
        placeholder='TYPE'
        className='type'
      />
      </div>
      
     </div>
    </div>
  );
}

export default AddNewExercisePage;