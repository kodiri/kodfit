import React from 'react';
import BottomNavBar from './BottomNavBar/BottomNavBar';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <h1>Welcome to Kodfit!!!</h1>
          <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
