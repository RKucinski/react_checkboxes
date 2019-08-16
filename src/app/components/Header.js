import React, { Component } from 'react';
import { StylesConstant } from '../constants/index';

class Header extends Component {
	render() {
		return (
			<div style={StylesConstant.HEADER.container}>
				<h1 style={StylesConstant.HEADER.title}>
					Ibiza{' '}
					<span style={StylesConstant.HEADER.span}>
						Checkboxes Test
					</span>
				</h1>
			</div>
		);
	}
}

export default Header;
