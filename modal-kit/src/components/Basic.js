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
							<button className="cancel">No</button>
							<button className="ok">Yes</button>
						</div>
						<footer>
							{' '}
							{/* MAKE OUTER CLICKING ON THE OUTER DIV CLOSE THE MODAL */}
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
