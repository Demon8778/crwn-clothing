import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import Header from './components/header/Header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
