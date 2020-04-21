import React from 'react';
import { Link } from 'react-router-dom'
import './WorkoutListComponent.css';


export default class WorkoutListComponent extends React.Component {

  render() {
    let { workout, workoutName, image, workoutAlt } = this.props;

    return (
      <Link to={`/dashboard/home/${workout}`}>
          <div className="routine">
            <p className="text">{workoutName}</p>
            <img src={image} alt={workoutAlt}/>
          </div>
      </Link>
    )
  }
}

             
