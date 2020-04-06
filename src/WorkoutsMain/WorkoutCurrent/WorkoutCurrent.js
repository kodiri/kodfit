import React from 'react'
import './WorkoutCurrent.css';

export default function WorkoutCurrent() {
    return (
        <div className="WorkoutCurrent">
            <h2 className="WorkoutCurrentTitle">
                Current Workout
            </h2>
            <main className="containerOne">
                <div className="containerOne-content workoutAction">
                    current workout image/video
                </div>
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
