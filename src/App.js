import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './Utility.css';
import './Base.css';
import PageView from './PageView/PageView';
import LandingPage from './LandingPage/LandingPage';
import Logo from './Logo/Logo';



function App() {
	return (
		<Router>
			<div className="App">
				<Logo />
				<PageView />
				<Route path="/" exact component={LandingPage} />
			</div>
		</Router>
	);
}
export default App;
