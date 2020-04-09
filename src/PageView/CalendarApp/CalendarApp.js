import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ExercisesData from '../../Data/ExercisesData';
import ExerciseList from '../WorkoutsMain/WorkoutExerciseList/WorkoutExerciseList';
import './CalendarApp.css';



export default function CalendarApp() {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);

  };

  return (
    <div className="calendarAppContainer">
        <h2 className="calendarTitle">Activity Calendar</h2>
      
      <div className="calendarOne">
        <main className="calendarContent">
          <Calendar
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date(2020, 11, 31)}
            showNeighboringMonth={false}
            minDetail={'year'}
            prev2Label={null}
            nextLabel={'▶︎'}
            prevLabel={'◀︎'}
            next2Label={null}
            onChange={onChange}
            value={date}
          />
        </main>
      </div>
  
      
        <div className="calendarWorkoutContainer">
          <div className="ContainerContent">
            <h3 className="title">Daily Workout</h3>
            <button className="button">Start</button>

            <div className="calendarExerciseList"> {
              
              ExercisesData().map(exercise => {
                return (
                  <ExerciseList
                  key={exercise.exerciseName}
                  exerciseName={exercise.exerciseName}
                  reps={exercise.reps}
                  />
                );
              })
            }
            </div>
          </div>
        </div> 
      </div>  
  );  

}




  