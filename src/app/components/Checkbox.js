import React from 'react';

const Checkbox = ({ label, handleChange, isChecked }) => {
	return (
		<div>
			<label>{label}</label>
			<input
				type='checkbox'
				name={label}
				onChange={(e) => handleChange(label, e)}
				checked={isChecked}
			/>
		</div>
	);
};

export default Checkbox;
