import React, { Fragment } from 'react';

const Checkbox = ({ label, handleChange, isChecked }) => {
	// const onChangeFunction =
	// 	label === 'Select all'
	// 		? (e) => handleChange(e)
	// 		: (e) => handleChange(label, e);
	return (
		<Fragment>
			<div>
				<label>{label}</label>
				<input
					type='checkbox'
					name={label}
					onChange={(e) => handleChange(label, e)}
					checked={isChecked}
				/>
			</div>
		</Fragment>
	);
};

export default Checkbox;
