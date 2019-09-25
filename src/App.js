import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import Header from './components/header/Header';
import CheckoutPage from './pages/checkout/CheckoutPage';

import { selectCurrentUser } from './redux/user/userSelectors';

import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/"></Redirect>
							) : (
								<SignInSignUp></SignInSignUp>
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
