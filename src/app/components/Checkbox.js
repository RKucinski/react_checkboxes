import React, { Fragment } from 'react';

const Checkbox = ({ label, handleChange, isChecked }) => {
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
