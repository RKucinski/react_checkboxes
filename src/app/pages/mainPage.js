import React from 'react';
import { withContext } from '../context/checkboxesContext';
import Content from '../components/Content';
import Checkboxes from '../components/Checkboxes';
import { StylesConstant } from '../constants/index';
import '../Global.css';

const MainPage = () => {
	return (
		<div style={StylesConstant.MAIN_PAGE.mainContainer}>
			<p>MainPage</p>
			<Checkboxes />
			<Content />
		</div>
	);
};

export default withContext(MainPage);
