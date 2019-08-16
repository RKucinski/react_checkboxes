import React from 'react';
import { withContext } from '../context/checkboxesContext';
import Content from '../components/Content';
import Checkboxes from '../components/Checkboxes';
import { StylesConstant } from '../constants/index';
import '../Global.css';
import Spinner from '../components/Spinner';

const MainPage = ({ isLoading }) => {
	return isLoading ? (
		<Spinner style={StylesConstant.MAIN_PAGE.mainContainer} />
	) : (
		<div style={StylesConstant.MAIN_PAGE.mainContainer}>
			<h2>What color are your eyes ?</h2>
			<Checkboxes />
			<Content />
		</div>
	);
};

export default withContext(MainPage);
