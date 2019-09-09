import React, { Component } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';

import './SignIn.scss';

export default class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			email: '',
			password: ''
		});
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
						label="Email"
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
						label="Password"
					/>
					<CustomButton type="submit">Sing in</CustomButton>
				</form>
			</div>
		);
	}
}
