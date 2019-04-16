import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Basic from './components/Basic';
import Profile from './components/Profile';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="tc pv4 pv5-ns">
					<img
						src="http://tachyons.io/img/logo.jpg"
						className="br-100 pa1 ba b--black-10 h3 w3"
						alt="avatar"
					/>
					<h1 className="f5 f4-ns fw6 mid-gray">Julian J. Kohlman</h1>
					<h2 className="f6 gray fw2 ttu tracked">Modal Kit</h2>
				</header>

				{/* <Basic title="Basic modal" /> */}
				<Profile />
			</div>
		);
	}
}

export default App;
