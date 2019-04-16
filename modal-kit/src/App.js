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
						src={require('./images/bpBanner.jpg')}
						className="br-100 pa1 ba b--black-10 h4 w4"
						alt="avatar"
					/>
					<h1 className="f5 f4-ns fw6 mid-gray .roboto">Julian J. Kohlman</h1>
					<h2 className="f6 gray fw2 ttu tracked .calisto">Modal Kit</h2>
				</header>
				<hr />
				<article className="pa3 pa5-ns">
					<h1 className="f4 bold center mw6">Modals</h1>
					<ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
						<li className="ph3 pv3 bb b--light-silver">
							<Basic title="Basic modal" />
						</li>
						<li className="ph3 pv3 bb b--light-silver">
							<Profile title="Profile modal" />
						</li>
						<li className="ph3 pv3 bb b--light-silver">Movie Info</li>
						<li className="ph3 pv3 bb b--light-silver">Scrolling</li>
						<li className="ph3 pv3 bb b--light-silver">Filter</li>
						<li className="ph3 pv3 bb b--light-silver">Full Screen</li>
						<li className="ph3 pv3 bb b--light-silver">Mini</li>
						<li className="ph3 pv3">Large</li>
					</ul>
				</article>
			</div>
		);
	}
}

export default App;
