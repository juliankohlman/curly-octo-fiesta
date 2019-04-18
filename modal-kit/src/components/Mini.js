// basic modal: header - contents - actions
import React, { Component } from 'react';

export default class Mini extends Component {
	// State can be expanded to handle more modal complexity
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
	}

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	// Action handlers would likely be tied to some routing and/or Database interaction
	cancelHandler = e => {
		alert('Returning to account...');
		e.stopPropagation();
	};

	okHandler = e => {
		alert('Now deleting account...');
		e.stopPropagation();
	};

	modalClick = e => {
		e.stopPropagation();
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
					<div className="dimmer" onClick={this.toggleModal}>
						<div className="mini-modal" onClick={this.modalClick}>
							<h2 className="header">Delete Your Account</h2>
							<div className="content">
								<p>Are you sure you want to delete your account</p>
							</div>

							<div className="mini-actions">
								<button className="mini-cancel" onClick={this.cancelHandler}>
									No
								</button>
								<button className="mini-ok" onClick={this.okHandler}>
									Yes
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
