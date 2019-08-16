import React from 'react';
import { withContext } from '../context/checkboxesContext';
import Card from './Card';

const Content = ({ checkboxesData, fetchedData }) => {
	const getCheckedBoxes = () => {
		let checkedBoxes = [];
		Object.entries(checkboxesData).forEach(([key, value]) => {
			if (value) {
				checkedBoxes.push(key);
			}
		});
		return checkedBoxes;
	};

	const getFilteredContent = () => {
		let filteredContent = [];
		let chosenKeys = getCheckedBoxes();
		let initialData = fetchedData;

		filteredContent = Object.values(initialData).filter((item) =>
			chosenKeys.includes(item['eye_color'])
		);
		return filteredContent;
	};

	const displayContent = () => {
		let filteredContent = getFilteredContent();

		filteredContent.map((card) => {
			return <Card data={card} />;
		});
	};

	return <div>{displayContent()}</div>;
};

export default withContext(Content);
