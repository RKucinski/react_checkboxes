import ColorsConstant from './Colors';

export default {
	MAIN_PAGE: {
		mainContainer: {
			backgroundColor: ColorsConstant.COMMON.CREAM,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		checkboxesContainer: {
			margin: '30px',
			display: 'inline-flex',
			width: '100%',
			justifyContent: 'space-evenly',
			flexWrap: 'wrap'
		}
	}
};
