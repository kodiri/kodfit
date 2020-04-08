import React from 'react';
import './WorkoutExerciseList.css';


export default class ExerciseList extends React.Component {

  render() {
    let { exerciseName, reps} = this.props;

    return (
          <div className="item">
            <p className="detailsName">{exerciseName}</p>
            <p className="detailsReps">{reps}</p>
          </div>
    )

}
}

