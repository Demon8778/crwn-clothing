import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';

import './App.css';
import Header from './components/header/Header';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;