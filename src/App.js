import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/HomePage';

import './App.css';

const HatsPage = () => (
	<div className="">
		<h1>Hats Page</h1>
	</div>
);

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
