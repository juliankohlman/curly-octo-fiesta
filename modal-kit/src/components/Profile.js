// basic modal: header - contents - actions
import React, { Component } from 'react';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
	}

	toggleModal = () => {
		this.setState({ isOpen: !this.state.isOpen });
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
						<div className="profile-modal" onClick={this.modalClick}>
							<div className="header">Select a Photo</div>

							<div className="image-content">
								<div className="image-size">
									<img src={require('../images/rachel.png')} alt="profile" />
								</div>
								<div className="description">
									<div className="ui-header">Default Profile Image</div>
									<p>
										The push: a climbers journey of endurance, risk and going
										beyond limits
									</p>
									<p>Secondary part of content section</p>
								</div>
							</div>
							<div className="profile-actions">
								<button className="nope">Nope</button>
								<button className="profile-good">Yep, that's me</button>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
