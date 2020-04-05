import React from 'react';
import BottomNavBar from './BottomNavBar/BottomNavBar';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import CalendarApp from './CalendarApp/CalendarApp';

function App() {
  return (
    <Router>
      <div className="App">
          <h1>Welcome to Kodfit!!!</h1>
          <Route path="/calendar" exact component={CalendarApp} />
          <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
