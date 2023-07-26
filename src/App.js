import React, { useState } from 'react';

function App() {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // State to store the search results
  const [searchResults, setSearchResults] = useState([]);

  // State to track the active main category for displaying subcategories
  const [activeCategory, setActiveCategory] = useState(null);

  const data = [
    {
      category: 'Abs',
      subcategories: ['Ab-Wheel Rollout', 'Cable Crunch', 'Crunch', 'Crunch Machine', 'Decline Crunch', 'Dragon Flag', 'Hanging Knee Raise', 'Hanging Leg Raise', 'Plank', 'Side Plank'],
    },
    {
      category: 'Back',
      subcategories: ['Barbell Row', 'Barbell Shrug', 'Chin Up', 'Deadlift', 'Dumbell Row', 'Good Morning', 'Hammer Strength Row', 'Lat Pulldown', 'Machine Shrug', 'Neutral Chin Up', 'Pendlay Row', 'Pull Up', 'Rack Pull', 'Seated Cable Row', 'Straight-Arm Cable Pushdown', 'T-Bar Row'],
    },
    {
      category: 'Biceps',
      subcategories: ['Barbell Curl', 'Cable Curl', 'Dumbbell Curl', 'Dumbbell Concentration Curl', 'Dumbbell Hammer Curl', 'Dumbbell Preacher Curl', 'EZ-Bar Curl', 'EZ-Bar Preacher Curl', 'Seated Incline Dumbbell Curl', 'Seated Machine Curl'],
    },
    {
      category: 'Cardio',
      subcategories: ['Running(Outdoor)', 'Running(Treadmill)', 'Cycling', 'Swimming', 'Walking', 'Elliptical Trainer', 'Rowing Machine', 'Stationary Bike'],
    },
    {
      category: 'Chest',
      subcategories: ['Cable Crossover', 'Decline Barbell Bench Press', 'Decline Hammer Strength Chest Press', 'Flat Barbell Bench Press', 'Flat Dumbbell Bench Press', 'Flat Dumbbell Fly', 'Incline Barbell Bench Press', 'Incline Dumbbell Bench Press', 'Incline Dumbbell Fly', 'Incline Hammer Strength Chest Press', 'Seated Machine Fly'],
    },
    {
      category: 'Legs',
      subcategories: ['Barbell Calf Raise', 'Barbell Front Squat', 'Barbell Glute Bridge', 'Barbell Squat', 'Donkey Calf Raise', 'Glute-Ham Raise', 'Leg Extention Machine', 'Leg Press', 'Lying Leg Curl Machine', 'Romanian Deadlift', 'Seated Calf Raise Machine', 'Seated Leg Curl Machine', 'Standing Calf Raise Machine', 'Stiff-Legged Deadlift', 'Sumo Deadlift'],
    },
    {
      category: 'Shoulders',
      subcategories: ['Arnold Dumbbell Press', 'Behind The Neck Barbell Press', 'Cable Face Pull', 'Front Dumbbell Raise', 'Hammer Strength Shoulder Press', 'Lateral Dumbbell Raise', 'Lateral Machine Raise', 'Log Press', 'One-Arm Standing Dumbbell Press', 'Overhead Press', 'Rear Delt Dumbbell Raise', 'Rear Delt Machine Fly', 'Seated Dumbbell Lateral Raise', 'Seated Dumbbell Press', 'Smith Machine Overhead Press'],
    },
    {
      category: 'Triceps',
      subcategories: ['Cable Overhead Triceps Extention', 'Close Grip Barbell Bench Press', 'Dumbbell Overhead Triceps Extention', 'EZ-Bar Skullcrusher', 'Lying Triceps Extention', 'Parallel Bar Triceps Dip', 'Ring Dip', 'Rope Push Down', 'Smith Machine Close Grip Bench Press', 'V-Bar Push Down'],
    },
  ];

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
}

export default App;







