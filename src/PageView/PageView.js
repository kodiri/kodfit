import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CalendarApp from './CalendarApp/CalendarApp';
import NearMeGyms from './NearMe/NearMeGyms/NearMeGyms';
import NearMeTrainers from './NearMe/NearMeTrainers/NearMeTrainers';
import WorkoutsMain from './WorkoutsMain/WorkoutsMain';
import WorkoutList from './WorkoutsMain/WorkoutList/WorkoutList';
import WorkoutCurrent from './WorkoutsMain/WorkoutCurrent/WorkoutCurrent';
import NearMe from './NearMe/NearMe';
import Tracker from './Tracker/Tracker';
import Login from './Login/Login';
import Timer from './Timer/Timer';
import OurGoal from '../LandingPage/OurGoal/OurGoal';
import LandingPage from '../LandingPage/LandingPage';
import StopWatch from './Timer/StopWatch/StopWatch';
import AboutUs from './AboutUs/AboutUs';

import Navbar from './NavBar/NavBar';

export default function PageView() {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/calendar" exact component={CalendarApp} />
      <Route path="/near-me" exact component={NearMe} />
      <Route path="/near-me-gyms" exact component={NearMeGyms} />
      <Route path="/near-me-trainers" exact component={NearMeTrainers} />
      <Route path="/home" exact component={WorkoutsMain} />
      <Route path="/workout-list" exact component={WorkoutList} />
      <Route path="/workout-current" exact component={WorkoutCurrent} />
      <Route path="/tracker" exact component={Tracker} />
      <Route path="/login" exact component={Login} />
      <Route path="/timer" exact component={Timer} />
      <Route path="/our-goal" exact component={OurGoal} />
      <Route path="/stopwatch" exact component={StopWatch} />
      <Route path="/about" exact component={StopWatch} />
      <NavBar />
    </Router>
  );
}