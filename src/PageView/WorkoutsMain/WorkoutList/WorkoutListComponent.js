import React, { Link } from 'react';
import './WorkoutListComponent.css';


export default class WorkoutListComponent extends React.Component {

  render() {
    let { id, workoutName, image, workoutAlt } = this.props;

    return (
      <Link to={`/dashboard/workout-list/${id}`}>
          <div className="routine">
            <p className="text">{workoutName}</p>
            <img src={image} alt={workoutAlt}/>
          </div>
      </Link>
    )
  }
}

             
