import React, { useState, useEffect } from 'react'
import './SmallTimer.css';

const SmallTimer = ({ timer, exercises }) => {
  const [timeLeft, setTimeLeft] = useState(timer)
  const [position, setPosition] = useState(0)

  const secondsToTime = secs => {
    let hours = Math.floor(secs / (60 * 60))

    let divisorForMinutes = secs % (60 * 60)
    let minutes = Math.floor(divisorForMinutes / 60)

    let divisorForSeconds = divisorForMinutes % 60
    let seconds = Math.ceil(divisorForSeconds)

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    }
    return obj
  }
 
  /* const setTimer = () => {
    if (isRunning === 0) {
      setRunning(1)
      setTimeLeft(timer)
    }

    if (isRunning === 1) {
      setRunning(2)
      clearInterval(intervalId)
    }

    if (isRunning === 2 && timeLeft) {
      setRunning(1)
      setTimeLeft(timeLeft - 1)
    }
  }
 
  const resetTimer = () => {
      setRunning(0);
      setTimeLeft(0);
  }
 */
  const theTimer = () => {
    if (timeLeft > -1) {
     
      if (timeLeft < 60) {
        return `00 : ${('0' + secondsToTime(timeLeft).s).slice(-2)}`
      } else {
        return `${('0' + secondsToTime(timeLeft).m).slice(-2)} :  
                ${('0' + secondsToTime(timeLeft).s).slice(-2)}`
      }
    } else {
      if (timer < 60) {
        return `00 : ${('0' + secondsToTime(timer).s).slice(-2)}`
      } else {
        return `${('0' + secondsToTime(timer).m).slice(-2)} :  
                 ${('0' + secondsToTime(timer).s).slice(-2)}`
      }
    }
  }
 

  useEffect(() => {
    if (timeLeft < 0 &&  position <= exercises.length-1) {
      setPosition(position + 1)
      setTimeLeft(timer)
      return
    }
    let interval = 0
    interval = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLeft,position,exercises.length,timer])

  return (
    <div className='SmallTimer'>
       <h2 className='full-display'>{
          exercises[position] ?
          exercises[position].exerciseName : 'Finish Exercise'
      }</h2>
      <h2 className='full-display'>{
         position <= exercises.length-1 ?
         theTimer() : ''
      }</h2>

{/*       <button className="resetst-btn" onClick={resetTimer}><MdSettingsBackupRestore /></button>
      <button className="smalltimer-btn" onClick={setTimer}>{isRunning === 1 ? <FaRegStopCircle /> :<FaPlay />}</button> */}
    </div>
  )
}

export default SmallTimer
