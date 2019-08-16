import React from 'react';
import { withContext } from '../context/checkboxesContext';
import Card from './Card';
import { StylesConstant } from '../constants/index';

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
		let contentToDisplay = [];
		filteredContent.map((card) => {
			return contentToDisplay.push(<Card key={card.name} data={card} />);
		});
		return contentToDisplay;
	};

	const displayDefaultContent = () => {
		let chosenKeys = getCheckedBoxes();
		if (chosenKeys.length === 0) {
			return (
				<h4 style={StylesConstant.CONTENT.flashMessage}>
					Please check a box to make me go away !
				</h4>
			);
		}
	};

	return (
		<div>
			{displayContent()}
			{displayDefaultContent()}
		</div>
	);
};

export default withContext(Content);
