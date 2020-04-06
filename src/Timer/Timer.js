import React from 'react';
import TimerInput from './TimerInput/TimerInput';
import './Timer.css';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: {},
            seconds: 0,
            inputMinutes: 0,
            inputSeconds: 0,
            isRunning: false
        };
        this.timer = 0;
    }

    secondsToTime = (secs) => {
        let hours = Math.floor(secs / (60 * 60));

        let divisorForMinutes = secs % (60 * 60);
        let minutes = Math.floor(divisorForMinutes / 60);

        let divisorForSeconds = divisorForMinutes % 60;
        let seconds = Math.ceil(divisorForSeconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    handleTime = (e, timeUnit, modifier) => {
        const timeObject = {};
        timeObject[timeUnit] = e.target.value * modifier
        this.setState(timeObject)
     }
     
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer = (secs) => {

        if (this.state.isRunning && this.state.seconds > 0) {
            this.setState({
                isRunning: false
            });
            clearInterval(this.timer);

        } else {
            let total = +this.state.inputMinutes + +this.state.inputSeconds;

            this.setState({
                seconds: total,
                isRunning: true
            });

            this.timer = setInterval(this.countDown, 1000);

        }

    }

    countDown = (secs) => {

        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <div className="App">
                <div className="grid-container">
                    <div className="timer">
                        {this.state.time.m} : {this.state.time.s}
                    </div>
                    <div className="minutes">
                        Minutes
                        <TimerInput field={(e) => this.handleTime(e,'inputMinutes',60) } />
                    </div>
                    <div className="seconds">
                        Seconds
                        <TimerInput field={(e) => this.handleTime(e,'inputSeconds',1) } />
                    </div>
                    <div className="seconds">
                        <button
                            onClick={this.startTimer}>
                            {this.state.isRunning && this.state.seconds ? "Stop" : "Start"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;
