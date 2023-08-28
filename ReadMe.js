const userHistory = {
  "FRIDAY, 18/AUGUST/2023": {
    "abs roller": [{}, {}, {}, {}],
    "chest press": [{}, {}, {}, {}],
    "dumbell rows": [{}, {}, {}, {}],
  },
  "SATDAY, 19/AUGUST/2023": {
    "abs roller": [{}, {}, {}, {}],
    "chest press": [{}, {}, {}, {}],
    "dumbell rows": [{}, {}, {}, {}],
  },
};

// to save current record we just need to copy reccordArry in the exercise name arry

const users = {
  543164345: {  //userId
    userDefinedExercises: {
      chest: ["decline chest press", "incline chest press"],
      abs: ["hanging Leg Raises", "Russian Twists"],
    },
    userHistory: {
      "FRIDAY, 18/AUGUST/2023": {
        "abs roller": [{}, {}, {}, {}],
        "chest press": [{}, {}, {}, {}],
        "dumbell rows": [{}, {}, {}, {}],
      },
      "SATDAY, 19/AUGUST/2023": {
        "abs roller": [{}, {}, {}, {}],
        "chest press": [{}, {}, {}, {}],
        "dumbell rows": [{}, {}, {}, {}],
      },
    },
  },
};



//* 1. Save form data in localStorage first.
// *save userDefinedExercises in following form:
//* userDefinedExercises = {
//* chest:['decline chest press','incline chest press'],
//* abs:['hanging Leg Raises','Russian Twists',"plank"],
//*  }
//* const timeBoundExercise = ["hanging", "plank","  Russian twist", ""];
//* weight/reps  ,  time/reps
//* 2. Dropdown in category input.
//* 3. Correct render in search page.
//* 4. Perfect CSS in both pages.
//* 5. Also the above mentioned userDefinedExercises data should be added in the data prop.
//* (to show users exercise in search results too.) 
//* 6. The form data should be saved in the localStorage as well as in fireStore.
//* 7. Rename components with capital letters.
//* 8. Use "useRef" in place of document.getElementById. etc...




//* TODO:

//* 1. Have to add pr logic.
//* 2. Perfect CSS of history and  use react css to solve css conflicts...
//* 3. History in history page should be in reverse...
//* 4. Find why empty exercise name is been created...
//* 5. CRUDBtn now working properly... 