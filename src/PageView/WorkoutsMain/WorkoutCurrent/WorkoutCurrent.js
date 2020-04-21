import React, { useContext, useEffect } from 'react';
import { ExerciseContext } from '../../../context/ExerciseContext'
import './WorkoutCurrent.css';

export default function WorkoutCurrent() {

    let exercises = useContext(ExerciseContext);

    let arr = [1,2,3]

    useEffect(() => {
        arr.forEach(el => (
            setInterval(() => console.log(el), 2000)
        ))
    }, []);

    console.log(exercises.calendarExercisesList)

    return (
        <div className="WorkoutCurrent">
            <h2 className="WorkoutCurrentTitle">
                Current Workout
            </h2>
            <main className="containerOne">



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
