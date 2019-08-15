import React, { Component } from 'react';

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// data: {}
		};
	}

	// componentDidMount() {
	// 	fetch('https://swapi.co/api/people/')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			this.setState({
	// 				data: data.results
	// 			});
	// 		});
	// }

	render() {
		// console.log(this.state.data);
		return <div> Content </div>;
	}
}

export default Content;
