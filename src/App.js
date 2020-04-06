import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import CalendarApp from './CalendarApp/CalendarApp';
import NearMeGyms from './NearMe/NearMeGyms/NearMeGyms';
import NearMeTrainers from './NearMe/NearMeTrainers/NearMeTrainers';
import WorkoutsMain from './WorkoutsMain/WorkoutsMain';
import WorkoutList from './WorkoutsMain/WorkoutList/WorkoutList';
import WorkoutCurrent from './WorkoutsMain/WorkoutCurrent/WorkoutCurrent';
import NearMe from './NearMe/NearMe';
import Tracker from './Tracker/Tracker';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
        <h1>Kodfit</h1>

        <Router>
          <Route path="/calendar" exact component={CalendarApp} />
          <Route path="/near-me" exact component={NearMe} />
          <Route path="/near-me-gyms" exact component={NearMeGyms} />
          <Route path="/near-me-trainers" exact component={NearMeTrainers} />
          <Route path="/workout-main" exact component={WorkoutsMain} />
          <Route path="/workout-list" exact component={WorkoutList}/>
          <Route path="/workout-current" exact component={WorkoutCurrent}/>
          <Route path="/tracker" exact component={Tracker}/>
          <Route path="/login" exact component={Login}/>
        </Router>

    </div>
  );
}

export default App;
