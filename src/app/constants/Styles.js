import ColorsConstant from './Colors';

export default {
	MAIN_PAGE: {
		mainContainer: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			color: ColorsConstant.COMMON.DARK_GREY,
			marginBottom: 10,
			borderBottom: 'thick solid gray',
			minHeight: 300
		}
	},

	CHECKBOXES: {
		container: {
			margin: '30px',
			display: 'inline-flex',
			width: '100%',
			justifyContent: 'space-evenly',
			flexWrap: 'wrap'
		}
	},

	CONTENT: {
		container: {
			color: ColorsConstant.COMMON.DARK_GREY
		},
		flashMessage: {
			color: ColorsConstant.COMMON.IBIZA_RED
		}
	},

	HEADER: {
		container: {
			color: ColorsConstant.COMMON.IBIZA_RED,
			borderBottom: 'thick solid gray',
			marginBottom: 10,
			paddingTop: 10,
			paddingLeft: 10
		},
		title: {
			textTransform: 'uppercase',
			marginBottom: 10
		},
		span: {
			textTransform: 'none',
			color: ColorsConstant.COMMON.IBIZA_GREY
		}
	},

	FOOTER: {
		container: {
			display: 'flex',
			justifyContent: 'space-between',
			backgroundColor: ColorsConstant.COMMON.IBIZA_GREY,
			color: ColorsConstant.COMMON.CREAM,
			fontSize: '0.9rem',
			padding: 10
		}
	}
};
