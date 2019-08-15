import React, { Component, useState, useEffect } from 'react';
import Content from '../components/Content';
import Checkbox from '../components/Checkbox';
import { extractPropertyValues as defineCheckboxes } from '../utils/helpers';
import Checkboxes from '../components/Checkboxes';
import '../Global.css';
import { StylesConstant } from '../constants/index';

export const TestPage = () => {
	const [hasError, setErrors] = useState(false);
	const [people, setPeople] = useState({});

	// Fetching some random data to illustrate that this will work with any kind of data
	useEffect(() => {
		async function fetchData() {
			const res = await fetch('https://swapi.co/api/people/');
			res.json()
				.then((res) => {
					setPeople(res.results);
					console.log(res.results);
				})
				.catch((err) => setErrors(err));
		}

		fetchData();
	});

	// 	// Callback to handle state
	// 	handleChange = (name, e) => {
	// 		let { checkboxes } = this.state;
	// 		checkboxes[name] = e.target.checked;
	// 		this.setState({ checkboxes: checkboxes });
	// 	};

	// 	// Function to create an array of Jsx to render the checkboxes later
	// 	renderCheckboxes = (data) => {
	// 		let arrayOfCheckboxes = [];
	// 		data.map((item) => {
	// 			arrayOfCheckboxes.push(
	// 				<Checkbox
	// 					key={item}
	// 					label={item}
	// 					handleChange={this.handleChange}
	// 				/>
	// 			);
	// 		});
	// 		return arrayOfCheckboxes;
	// 	};

	// 	// Now we define how we handle the all selector/de-selector
	// 	selectAll = (e) => {
	// 		let { checkboxes } = this.state;
	// 		Object.keys(checkboxes).forEach((name) => {
	// 			checkboxes[name] = e.target.checked;
	// 		});
	// 		this.setState({ checkboxes: checkboxes });
	// 	};

	return (
		<div />
		// 		<div
		// 			className='TestPageContainer'
		// 			style={StylesConstant.MAIN_PAGE.mainContainer}>
		// 			<p>TestPage</p>
		// 			<h1>Checkboxes</h1>
		// 			<div style={StylesConstant.MAIN_PAGE.checkboxesContainer}>
		// 				<label>Select All</label>
		// 				<input
		// 					type='checkbox'
		// 					name='select all'
		// 					onChange={(e) => this.selectAll(e)}
		// 				/>
		// 				{this.renderCheckboxes(definedCheckboxes)}
		// 			</div>

		// 			<Content />
		// 		</div>
	);
};
