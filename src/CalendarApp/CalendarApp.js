import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './CalendarApp.css';
 
export default class CalendarApp extends Component {
  state = {value: new Date()};

  onChange = value => this.setState({ value })

  render() {
    const { value } = this.state;

    return (
      <div className="calendarAppContainer">
          <h2 className="calendarTitle">Activity Calendar</h2>
        
        <div className="containerOne">
          <main className="containerContent">
            <Calendar
              onChange={this.onChange}
              value={value}
            />
          </main>
        </div>
      </div>
    );
  }
}

  