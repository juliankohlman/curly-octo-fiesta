// basic modal: header - contents - actions
import React, { Component } from 'react';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
	}

	//Todo styled buttons for showing and closing modal
	toggleModal = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		return (
			<div>
				{this.state.isOpen === false && (
					<button className="open-modal" onClick={this.toggleModal}>
						{this.props.title}
					</button>
				)}
				{/* <button onClick={this.toggleModal}>{this.props.title}</button> */}
				{this.state.isOpen && (
					<div className="dimmer">
						<div className="profile-modal">
							<div className="header">Select a Photo</div>
							{/* image will be thumbnail that should scale up and down */}
							<div className="image-content">
								<div className="image-size">
									<img src={require('../images/rachel.png')} alt="profile" />
								</div>
								<div className="description">
									<div className="ui-header">UI HEADER</div>
									<p>
										The push: a climbers journey of endurance, risk and going
										beyond limits
									</p>
									<p>Secondary part of content section</p>
								</div>
							</div>
							<div className="actions">
								<button className="cancel">CANCEL</button>
								<button className="ok">OK</button>
							</div>
							{/* <footer>
							{' '}
							<button className="close-modal" onClick={this.toggleModal}>
								Close Modal
							</button>
						</footer> */}
						</div>
					</div>
				)}
			</div>
		);
	}
}
