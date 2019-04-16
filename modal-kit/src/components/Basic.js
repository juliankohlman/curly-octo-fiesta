// basic modal: header - contents - actions
import React, { Component } from 'react';

export default class Basic extends Component {
	// State can be expanded to handle more modal complexity
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
	}

	toggleModal = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	// Action handlers would likely be tied to some routing and/or Database interaction
	cancelHandler = () => {
		alert('canceling now...');
	};

	okHandler = () => {
		alert('great adding candidate now...');
	};

	render() {
		return (
			<div>
				{this.state.isOpen === false && (
					<button className="open-modal" onClick={this.toggleModal}>
						{this.props.title}
					</button>
				)}
				{this.state.isOpen && (
					<div className="active-modal" onClick={this.toggleModal}>
						<h2>Add Candidate To Project</h2>
						<p>
							Teach our software who you want to hire with zero additional
							effort.
						</p>
						<p>
							With projects, you can organize your recruiting workflow into jobs
							and candidates.{' '}
						</p>
						<div className="actions">
							<button className="cancel" onClick={this.cancelHandler}>
								No
							</button>
							<button className="ok" onClick={this.okHandler}>
								Yes
							</button>
						</div>
						{/* Uncomment below to use dedicated close button */}
						{/* <footer>
							<button className="close-modal" onClick={this.toggleModal}>
								Close Modal
							</button>
						</footer> */}
					</div>
				)}
			</div>
		);
	}
}
