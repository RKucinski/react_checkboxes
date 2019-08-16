import React, { Component, Fragment } from 'react';
import Content from '../components/Content';
import Checkbox from '../components/Checkbox';
import { extractPropertyValues as defineCheckboxes } from '../utils/helpers';
import '../Global.css';
import { StylesConstant } from '../constants/index';

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fetchedData: {},
			checkboxes: {}
		};
	}

	// Fetching some random data to illustrate that this will work with any kind of data
	componentDidMount() {
		// Here are only the API info : url, credentials, and so on.
		const fetchData = async () => {
			const url = 'https://swapi.co/api/people/';
			return fetch(url);
		};

		// Here we're processing the data. There are plenty of ways to do this.
		const saveDataIntoState = async () => {
			try {
				const data = await fetchData();
				const json = await data.json();
				// Parsing results // for example, I used 'eye_color'
				const definedCheckboxes = defineCheckboxes(
					json.results,
					'eye_color'
				);
				const checkboxes = definedCheckboxes.reduce(
					(checkboxes, checkbox) => ({
						...checkboxes,
						[checkbox]: false
					}),
					{}
				);
				// Saving both data types into state
				this.setState({
					fetchedData: json.results,
					checkboxes: checkboxes
				});
			} catch (e) {
				console.error('Problem', e);
			}
		};
		// We call the function
		saveDataIntoState();
	}

	// Callback to handle state change for "common" checkboxes
	handleChange = (name, e) => {
		let { checkboxes } = this.state;
		checkboxes[name] = e.target.checked;
		this.setState({ checkboxes: checkboxes });
	};

	// Now we define how we handle the all selector/de-selector
	selectAll = (e) => {
		let { checkboxes } = this.state;
		Object.keys(checkboxes).forEach((name) => {
			checkboxes[name] = e.target.checked;
		});
		this.setState({ checkboxes: checkboxes });
	};

	// Function to render common checkboxes. "prop" key is unique : ensured by defineCheckboxes function in Component did mount
	renderCheckboxes = (data) => {
		let arrayOfCheckboxes = [];
		for (var prop in data) {
			arrayOfCheckboxes.push(
				<Checkbox
					key={prop}
					label={prop}
					handleChange={this.handleChange}
					isChecked={data[prop]}
				/>
			);
		}
		return arrayOfCheckboxes;
	};

	// Function to render the unique "(de)select all" checkbox. Input will be controlled from here
	renderSelectAllCheckbox = (data) => {
		let isSelectAllChecked = Object.values(data).every(
			(val) => val === true
		)
			? true
			: false;
		return (
			<Fragment>
				<label>Select All</label>
				<input
					type='checkbox'
					name='select all'
					onChange={(e) => this.selectAll(e)}
					checked={isSelectAllChecked}
				/>
			</Fragment>
		);
	};

	render() {
		const { checkboxes } = this.state;

		return (
			<div
				className='mainPageContainer'
				style={StylesConstant.MAIN_PAGE.mainContainer}>
				<p>MainPage</p>
				<h1>Checkboxes</h1>
				<div style={StylesConstant.MAIN_PAGE.checkboxesContainer}>
					{this.renderSelectAllCheckbox(checkboxes)}
					{this.renderCheckboxes(checkboxes)}
				</div>
				<Content />
			</div>
		);
	}
}

export default MainPage;
