import React from 'react';
import './WorkoutList.css';
import listChest from '../../../common/images/listChest.png';
import listBack from '../../../common/images/listBack.png';
import listLegs from '../../../common/images/listLegs.png';
import listShoulders from '../../../common/images/listShoulders.png';
import listArms from '../../../common/images/listArms.png';
import listCardio from '../../../common/images/listCardio.png';

export default function WorkoutList() {
    return (
        <div className="WorkoutsList">
            <div className="containerTop">
            <a className="button One" href="./Home">Workouts</a>
            <a className="button Two" href="./workout-list">Exercise List</a>
            </div>
            
            <main className="containerBottom">
                <div className="list">
                    <img src={listChest} alt="list one"/>
                    <div className="text">Chest</div>
                </div>
                <div className="list">
                    <img src={listBack} alt="list two"/>
                    <div className="text">Back</div>
                </div>
                <div className="list">
                    <img src={listLegs} alt="list three"/>
                    <div className="text">Legs</div>
                </div>
                <div className="list">
                    <img src={listShoulders} alt="list four"/>
                    <div className="text">Shoulders</div>
                </div>
                <div className="list">
                    <img src={listArms} alt="list five"/>
                    <div className="text">Arms</div>
                </div>
                <div className="list">
                    <img src={listCardio} alt="list six"/>
                    <div className="text">cardio</div>
                </div>
                
                
                
                
            </main>
        </div>
    )
}
