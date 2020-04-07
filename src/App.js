import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './Utility.css';
import './Base.css';
import PageView from './PageView/PageView';
import LandingPage from './LandingPage/LandingPage';


function App() {
	return (
		<Router>
			<div className="App">
				<h1>Kodfit</h1>
				<PageView />
				<Route path="/" exact component={LandingPage} />
			</div>
		</Router>
	);
}
export default App;