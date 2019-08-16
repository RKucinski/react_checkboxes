import React from 'react';
import { StylesConstant } from '../constants/index';

const Card = ({ data }) => {
	return (
		<div style={StylesConstant.CONTENT.cardContainer}>
			<h3
				style={{
					textAlign: 'center'
				}}>
				{data.name}
			</h3>
			<ul
				style={{
					listStyleType: 'none',
					paddingLeft: 10
				}}>
				<li>Gender : {data.gender}</li>
				<li>Eyes color : {data.eye_color}</li>
				<li>Hair color : {data.hair_color}</li>
				<li>Skin color : {data.skin_color}</li>
				<li>Birthyear : {data.birth_year}</li>
			</ul>
		</div>
	);
};

export default Card;
