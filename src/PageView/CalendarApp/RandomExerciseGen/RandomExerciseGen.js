import React, { useContext } from 'react';
import { ExerciseContext } from '../../../context/ExerciseContext'
import ExercisesData from '../../../Data/ExercisesData';
import ExerciseList from '../../WorkoutsMain/WorkoutExerciseList/WorkoutExerciseList';
import '../CalendarApp.css';

export const getRandomNumbersArray = (el) => {
  let randomNumbersArray = [];
  for(let i = 0; i < el; i++) {
    let randomNumber = Math.floor(Math.random() * ExercisesData().length);
    if(randomNumbersArray.includes(randomNumber)){
      randomNumber === 0 ?
        randomNumbersArray.push(randomNumber + 1) :
        randomNumbersArray.push(randomNumber - 1)
    } else {
      randomNumbersArray.push(randomNumber)
    }
  }
  return randomNumbersArray
};

export default function RandomExerciseGen() {

  let {calendarExercisesList} = useContext(ExerciseContext)

  return (
    <>
      {
        Array.isArray(calendarExercisesList) && calendarExercisesList.map((position, index) => (
          <ExerciseList
            key={ExercisesData()[position].exerciseName + index}
            exerciseName={ExercisesData()[position].exerciseName}
            reps={ExercisesData()[position].reps}
          />
        ))
      }
    </>
  )
}
