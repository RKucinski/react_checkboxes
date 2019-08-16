import React from 'react';

const Card = ({ data }) => {
	return (
		<div>
			<h2>{data.name}</h2>
			<ul>
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
