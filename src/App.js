import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './Utility.css';
import './Base.css';
import PageView from './PageView/PageView';
import LandingPage from './LandingPage/LandingPage';
import logo from './common/images/kodfit_logo_small.svg';


function App() {
	return (
		<Router>
			<div className="App">
				<img src={logo} className="logo" />
				<PageView />
				<Route path="/" exact component={LandingPage} />
			</div>
		</Router>
	);
}
export default App;
