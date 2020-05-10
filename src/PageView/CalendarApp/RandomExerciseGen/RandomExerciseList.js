import React, { useContext } from 'react';
import { ExerciseContext } from '../../../context/ExerciseContext';
import ExercisesData from '../../../Data/ExercisesData';
import ExerciseList from '../../WorkoutsMain/WorkoutExerciseList/WorkoutExerciseList';
import '../CalendarApp.css';

export default function RandomExerciseList() {

  let {calendarExercisesList} = useContext(ExerciseContext);

  return (
    <>
      {
        Array.isArray(calendarExercisesList) && calendarExercisesList.map((position, index) => (
          <ExerciseList
            key={position.exerciseName}
            exerciseName={position.exerciseName}
            reps={position.reps}
          />
        ))
      }
    </>
  );
}
