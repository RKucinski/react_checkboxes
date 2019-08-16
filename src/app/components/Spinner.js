import React from 'react';
import Images from '../../assets/Images';

const Spinner = () => {
	return (
		<div style={{ display: 'flex' }}>
			<img
				src={Images.spinner}
				style={{
					margin: 'auto'
				}}
				alt='Loader'
			/>
		</div>
	);
};

export default Spinner;
