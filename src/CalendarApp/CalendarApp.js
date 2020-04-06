import React, { useState } from 'react';
import Calendar from 'react-calendar';
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
        <div className="calendarWorkoutContainerContent">
          <h3 className="calendarWorkoutTitle">Full Body Workout</h3>
          <button className="calendarWorkoutButton">Start</button>

          <div className="calendarExerciseList">
            <div className="calendarExerciseItem">
              <p className="itemDetailsName">Jumping Jacks</p>
              <p className="itemDetailsReps">30 reps</p>
            </div>
            <div className="calendarExerciseItem">
              <p className="itemDetailsName">Push-Ups</p>
              <p className="itemDetailsReps">20 reps</p>
            </div>
            <div className="calendarExerciseItem">
              <p className="itemDetailsName">Crunches</p>
              <p className="itemDetailsReps">30 reps</p>
            </div>
            <div className="calendarExerciseItem">
              <p className="itemDetailsName">Step-Ups</p>
              <p className="itemDetailsReps">20 reps</p>
            </div>
            <div className="calendarExerciseItem">
              <p className="itemDetailsName">Squats</p>
              <p className="itemDetailsReps">30 reps</p>
            </div>
            <div className="calendarExerciseItem">
              <p className="itemDetailsName">Tricep Dips</p>
              <p className="itemDetailsReps">20 reps</p>
            </div>
            <div className="calendarExerciseItem">
              <p className="itemDetailsName">Mountain Climbers</p>
              <p className="itemDetailsReps">30 reps</p>
            </div>
          </div>

        </div>

      

      </div>
    </div>
  );

}




  