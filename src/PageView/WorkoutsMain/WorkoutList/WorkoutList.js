import React from 'react';
import './WorkoutList.css';
import ExercisesListComponent from './ExercisesListComponent';
import ExercisesListData from '../../../Data/ExercisesListData';
import WorkoutListComponent from './WorkoutListComponent';

export default function WorkoutList(props) {
    return (
        <div className="WorkoutsList">
            <div className="containerTop">
            <a className="button One" href="../home">Workouts</a>
            <a className="button Two" href="./workout-list">Exercise List</a>
            </div>
            
            <div className="containerBottom"> {
                ExercisesListData().map(list => {
                    console.log(props.match.params);
                    return props.match.params === 'home' ? (
                        <WorkoutListComponent
                            key={list.workoutName}
                            id={list.id}
                            listName={list.listName}
                            image={list.image}
                        />) :
                        (<ExercisesListComponent
                            key={list.listName}
                            id={list.id}
                            listName={list.listName}
                            image={list.image}
                        />);
                })
            }  
            </div>                    
        </div>
        
    )
}
