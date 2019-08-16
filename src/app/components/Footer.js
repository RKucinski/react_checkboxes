import React, { Component } from 'react';
import { StylesConstant } from '../constants/index';

class Footer extends Component {
	render() {
		return (
			<div style={StylesConstant.FOOTER.container}>
				<p>I made this page for an interview</p>
				<p>Done by Roman Kucinski</p>
			</div>
		);
	}
}

export default Footer;
