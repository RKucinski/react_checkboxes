import React, { Component } from 'react';

class Checkboxes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { data } = this.props;
		console.log(data);
		console.log(this.state.checkboxes);
		return <div />;
	}
}

export default Checkboxes;
