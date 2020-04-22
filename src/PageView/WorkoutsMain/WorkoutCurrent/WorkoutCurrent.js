import React, { useContext, useEffect, useState } from 'react';
import { ExerciseContext } from '../../../context/ExerciseContext'
import ExercisesData from '../../../Data/ExercisesData';
import SmallTimer from '../../Timer/SmallTimer/SmallTimer'
import './WorkoutCurrent.css';

export default function WorkoutCurrent() {

    const exercises = useContext(ExerciseContext);
    let [position, setPosition] = useState(0);
    let time = 30000;

  useEffect(() => {
        if(position <= exercises.calendarExercisesList.length) { 
            const interval = setInterval(() => {
                setPosition(position + 1);
            }, time);
            return () => clearInterval(interval)
        }
   }, [position]);

    let itemIndex = exercises.calendarExercisesList[position];

    return (
        <div className="WorkoutCurrent">
            <h2 className="separator-center">
                Current Workout
            </h2>
            <main className="containerOne">
            <div className="containerOne-content workoutAction">
                {
                    itemIndex && 
                    <>
                        <h2 className='title'>
                            {ExercisesData()[itemIndex].exerciseName}
                        </h2>
                        <SmallTimer timer={time / 1000}/>
                    </>
                }
            </div >
                {/* <div className="containerOne-content timer">
                    <div className="containerTwo">
                        <button className="timerButton">Break</button>
                        <button className="timerButton">Finish</button>
                    </div>
                </div> */}
            </main>  
        </div>
    )
}
