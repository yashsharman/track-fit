import React from 'react';
import './addnewexercise.styles.css';

function AddNewExercisePage() {
  return (
    <div className='main-div'>
     <div className=''>
      <h4>New Exercise</h4>
   
       <div className='div-container'> 
      <div className='common-div'>
      <input 
        placeholder='NAME'
        className='name'
      />
      </div>     
      
      <div className='common-div'>
      <input 
        placeholder='CATEGORY'
        className='category'
      />
      </div>
      
      <div className='common-div'>
      <input 
        placeholder='TYPE'
        className='type'
      />
      </div>

      </div>
      
     </div>
    </div>
  );
}

export default AddNewExercisePage;