import React from 'react';
import './WorkoutList.css';

export default function WorkoutList() {
    return (
        <div className="WorkoutList">
            <h2 className="WorkoutListTitle">Exercise List</h2>
            <main className="container">
                <div className="container-content">Exercise list A</div>
                <div className="container-content">Exercise list B</div>
                <div className="container-content">Exercise list C</div>
                <div className="container-content">Exercise list D</div>
                <div className="container-content">Exercise list E</div>
                <div className="container-content">Exercise list F</div>
            </main>
        </div>
    )
}
