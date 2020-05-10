import React, { useContext, useEffect, useState } from 'react';
import { ExerciseContext } from '../../../context/ExerciseContext'
import ExercisesData from '../../../Data/ExercisesData';
import SmallTimer from '../../Timer/SmallTimer/SmallTimer';
import './WorkoutCurrent.css';

export default function WorkoutCurrent() {

    const exercises = useContext(ExerciseContext);
    let time = 30000;
    let itemIndex = exercises.calendarExercisesList;

    return (
        <div className="WorkoutCurrent container">
            <h2 className="separator-center">
                Current Workout
            </h2>
            <main>
                <div className="containerOne-content workoutAction">
                    {
                      <SmallTimer 
                        exercises={exercises.calendarExercisesList}
                        timer={time / 1000}/>
                    }
                </div >
            </main>  
        </div>
    )
}
