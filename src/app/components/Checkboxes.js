import React, { Fragment } from 'react';
import { StylesConstant } from '../constants/index';
import { withContext } from '../context/checkboxesContext';
import Checkbox from './Checkbox';

const Checkboxes = ({ checkboxesData, updateCheckboxesContext }) => {
	// Callback to handle state change for "common" checkboxes
	const handleChange = (name, e) => {
		let checkboxes = checkboxesData;
		checkboxes[name] = e.target.checked;
		updateCheckboxesContext({ checkboxesData: checkboxes });
	};

	// Now we define how we handle the all selector/de-selector
	const selectAll = (e) => {
		let checkboxes = checkboxesData;
		Object.keys(checkboxes).forEach((name) => {
			checkboxes[name] = e.target.checked;
		});
		updateCheckboxesContext({ checkboxesData: checkboxes });
	};

	// Function to render common checkboxes. "prop" key is unique : ensured by defineCheckboxes function in Component did mount
	const renderCheckboxes = (data) => {
		let arrayOfCheckboxes = [];
		for (var prop in data) {
			arrayOfCheckboxes.push(
				<Checkbox
					key={prop}
					label={prop}
					handleChange={handleChange}
					isChecked={data[prop]}
				/>
			);
		}
		return arrayOfCheckboxes;
	};

	// Function to render the unique "(de)select all" checkbox. Input will be controlled from here
	const renderSelectAllCheckbox = (data) => {
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
					onChange={(e) => selectAll(e)}
					checked={isSelectAllChecked}
				/>
			</Fragment>
		);
	};

	return (
		<Fragment>
			<h1>Checkboxes</h1>
			<div style={StylesConstant.MAIN_PAGE.checkboxesContainer}>
				{renderSelectAllCheckbox(checkboxesData)}
				{renderCheckboxes(checkboxesData)}
			</div>
		</Fragment>
	);
};

export default withContext(Checkboxes);
