import React from 'react';
import './WorkoutExerciseList.css';

export default function WorkoutExerciseList() {
    return (
        <div className="calendarWorkoutContainer">
        <div className="ContainerContent">
          <h3 className="title">Full Body Workout</h3>
          <button className="button">Start</button>

          <div className="calendarExerciseList">
            <div className="item">
              <p className="detailsName">Jumping Jacks</p>
              <p className="detailsReps">30 reps</p>
            </div>
            <div className="item">
              <p className="detailsName">Push-Ups</p>
              <p className="detailsReps">20 reps</p>
            </div>
            <div className="item">
              <p className="detailsName">Crunches</p>
              <p className="detailsReps">30 reps</p>
            </div>
            <div className="item">
              <p className="detailsName">Step-Ups</p>
              <p className="detailsReps">20 reps</p>
            </div>
            <div className="item">
              <p className="detailsName">Squats</p>
              <p className="detailsReps">30 reps</p>
            </div>
            <div className="item">
              <p className="detailsName">Tricep Dips</p>
              <p className="detailsReps">20 reps</p>
            </div>
            <div className="item">
              <p className="detailsName">Mountain Climbers</p>
              <p className="detailsReps">30 reps</p>
            </div>
          </div>
        </div>
      </div>
    )
}
