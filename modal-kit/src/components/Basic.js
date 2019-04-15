// basic modal: header - contents - actions
import React, { Component } from 'react';

export default class Basic extends Component {
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
					<div className="active-modal">
						<h2>HEADER</h2>
						<p>CONTENT 1</p>
						<p>CONTENT 2</p>
						<button className="ok">OK</button>
						<button className="cancel">CANCEL</button>
						<footer>
							{' '}
							<button className="close-modal" onClick={this.toggleModal}>
								Close Modal
							</button>
						</footer>
					</div>
				)}
			</div>
		);
	}
}
