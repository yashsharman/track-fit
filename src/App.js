import React from 'react';
import Search from './components/search/search.component';

const data = {
    
        'Abs' : [
          'Ab-Wheel Rollout',
          'Cable Crunch',
          'Crunch',
          'Crunch Machine', 
          'Decline Crunch',
          'Dragon Flag', 
          'Hanging Knee Raise', 
          'Hanging Leg Raise', 
          'Plank', 'Side Plank'],
      
       
         'Back': [
          'Barbell Row', 
          'Barbell Shrug', 
          'Chin Up', 
          'Deadlift', 
          'Dumbell Row', 
          'Good Morning', 
          'Hammer Strength Row', 
          'Lat Pulldown', 
          'Machine Shrug', 
          'Neutral Chin Up', 
          'Pendlay Row', 
          'Pull Up', 
          'Rack Pull', 
          'Seated Cable Row', 
          'Straight-Arm Cable Pushdown', 
          'T-Bar Row'],
        
        
         'Biceps' : [
          'Barbell Curl', 
          'Cable Curl', 
          'Dumbbell Curl', 
          'Dumbbell Concentration Curl', 
          'Dumbbell Hammer Curl', 
          'Dumbbell Preacher Curl', 
          'EZ-Bar Curl', 
          'EZ-Bar Preacher Curl', 
          'Seated Incline Dumbbell Curl', 
          'Seated Machine Curl'],
        
        'Cardio': [
          'Running(Outdoor)', 
          'Running(Treadmill)', 
          'Cycling', 
          'Swimming', 
          'Walking', 
          'Elliptical Trainer', 
          'Rowing Machine', 
          'Stationary Bike'],
        
        'Chest': [
          'Cable Crossover', 
          'Decline Barbell Bench Press', 
          'Decline Hammer Strength Chest Press', 
          'Flat Barbell Bench Press', 
          'Flat Dumbbell Bench Press', 
          'Flat Dumbbell Fly', 
          'Incline Barbell Bench Press', 
          'Incline Dumbbell Bench Press', 
          'Incline Dumbbell Fly', 
          'Incline Hammer Strength Chest Press', 
          'Seated Machine Fly'],
        
         'Legs': [
          'Barbell Calf Raise', 
          'Barbell Front Squat', 
          'Barbell Glute Bridge', 
          'Barbell Squat', 
          'Donkey Calf Raise', 
          'Glute-Ham Raise', 
          'Leg Extention Machine', 
          'Leg Press', 
          'Lying Leg Curl Machine', 
          'Romanian Deadlift', 
          'Seated Calf Raise Machine', 
          'Seated Leg Curl Machine', 
          'Standing Calf Raise Machine', 
          'Stiff-Legged Deadlift', 
          'Sumo Deadlift'],
        
         'Shoulders': [
          'Arnold Dumbbell Press', 
          'Behind The Neck Barbell Press', 
          'Cable Face Pull', 
          'Front Dumbbell Raise', 
          'Hammer Strength Shoulder Press', 
          'Lateral Dumbbell Raise', 
          'Lateral Machine Raise', 
          'Log Press', 
          'One-Arm Standing Dumbbell Press', 
          'Overhead Press', 
          'Rear Delt Dumbbell Raise', 
          'Rear Delt Machine Fly', 
          'Seated Dumbbell Lateral Raise', 
          'Seated Dumbbell Press', 
          'Smith Machine Overhead Press'],
        
         'Triceps': [
          'Cable Overhead Triceps Extention', 
          'Close Grip Barbell Bench Press', 
          'Dumbbell Overhead Triceps Extention', 
          'EZ-Bar Skullcrusher', 
          'Lying Triceps Extention', 
          'Parallel Bar Triceps Dip', 
          'Ring Dip', 
          'Rope Push Down', 
          'Smith Machine Close Grip Bench Press', 
          'V-Bar Push Down'],
        
      }        

function App() {
  return (
    <div>
      <Search data={data} />
    </div>
  );
}
export default App;

// //Object.keys((data))