import React, { useContext, useEffect, useState } from 'react';
import { ExerciseContext } from '../../../context/ExerciseContext'
import ExercisesData from '../../../Data/ExercisesData';
import './WorkoutCurrent.css';

export default function WorkoutCurrent() {

    const exercises = useContext(ExerciseContext);
    const [position, setPosition] = useState(0); 

/*     useEffect(() => {
        arr.forEach(el => (
            setInterval(() => console.log(el), 2000)
        ))
    }, []); */

    let itemIndex = exercises.calendarExercisesList[position];

    return (
        <div className="WorkoutCurrent">
            <h2 className="WorkoutCurrentTitle">
                Current Workout
            </h2>
            <main className="containerOne">

            {
                itemIndex && <div>{ExercisesData()[itemIndex].exerciseName}</div>
            }

{/*                 <div className="containerOne-content workoutAction">
                    current workout image/video
                </div >*/}
                <div className="containerOne-content timer">
                    0 hrs 0 min 0 sec remaining
                    <div className="containerTwo">
                        <button className="timerButton">Break</button>
                        <button className="timerButton">Finish</button>
                    </div>
                </div>
            </main>  
        </div>
    )
}
