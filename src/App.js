import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import SignInSignUp from './pages/signin-signup/SignInSignUp';

import './App.css';
import Header from './components/header/Header';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInSignUp} />
			</Switch>
		</div>
	);
}

export default App;
