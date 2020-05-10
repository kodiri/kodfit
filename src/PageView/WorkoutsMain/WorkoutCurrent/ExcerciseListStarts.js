import React from 'react'
import ExercisesData from '../../../Data/ExercisesData'
import SmallTimer from '../../Timer/SmallTimer/SmallTimer'
import './WorkoutCurrent.css'

export default class WorkoutCurrent extends React.Component {
  constructor () {
    super()
    this.state = {
      listId: {},
      position: 0
    }
  }

  componentDidMount () {
    let listId = this.props.match.params.listId
    this.setState({
      list: listId
    })
  }
  detailsOfExercise = () => {
    let addedExercise = []

    let listExercise = ExercisesData().filter(exercise => {
      return (
        exercise.category === this.state.list ||
        exercise.workout === this.state.list
      )
    })
    addedExercise.push(listExercise)
    return addedExercise
  }

  render () {
    return (
      <div className='WorkoutCurrent container'>
        <h2 className='separator-center'>Current Workout</h2>
        <main>
          <div className='containerOne-content workoutAction'>
            {
              <SmallTimer
                exercises={this.detailsOfExercise()[0]}
                timer={30000 / 1000}
                pauseStart={this.startclock}
              />
            }
          </div>
        </main>
      </div>
    )
  }
}
