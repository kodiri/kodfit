import React from 'react';
import './WorkoutsMain.css';
import workoutAbs from '../../common/images/workoutAbs.png';
import workoutLegs from '../../common/images/workoutLegs.png';
import workoutChest from '../../common/images/workoutChest.png';
import workoutShoulders from '../../common/images/workoutShoulders.png';
import workoutCalisthenics from '../../common/images/workoutCalisthenics.png';
import workoutArms from '../../common/images/workoutArms.png';

export default function WorkoutsMain() {
    return (
        <div className="WorkoutsMain">
            <div className="containerTop">
            <a className="button One" href="./Home">Workouts</a>
            <a className="button Two" href="./workout-list">Exercise List</a>
            </div>
            
            <main className="containerBottom">
                <div className="routine">
                    <img src={workoutAbs} alt="routine one"/>
                    <div className="text">Killer Core & Abs</div>
                </div>
                <div className="routine">
                    <img src={workoutLegs} alt="routine two"/>
                    <div className="text">Legs & cardio</div>
                </div>
                <div className="routine">
                    <img src={workoutChest} alt="routine three"/>
                    <div className="text">Chest Day!</div>
                </div>
                <div className="routine">
                    <img src={workoutShoulders} alt="routine four"/>
                    <div className="text">Shoulders challenge</div>
                </div>
                <div className="routine">
                    <img src={workoutCalisthenics} alt="routine five"/>
                    <div className="text">Calisthenics</div>
                </div>
                <div className="routine">
                    <img src={workoutArms} alt="routine six"/>
                    <div className="text">Biceps & Triceps</div>
                </div>
                
                
                
                
            </main>
        </div>
    )
}
