import React from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

const Checkbox = ({ label, handleChange, isChecked }) => {
	const labelFirstLetterUppercase = capitalizeFirstLetter(label);

	return (
		<div>
			<label
				// For such little things, we can use inline styling
				style={{
					marginRight: 5
				}}>
				{labelFirstLetterUppercase}
			</label>
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
