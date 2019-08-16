import React, { Component, createContext } from 'react';
import { extractPropertyValues as defineCheckboxes } from '../utils/helpers';

export const CheckboxesContext = createContext();

export default class ContextProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			updateCheckboxesContext: this.updateContext,
			checkboxesData: {},
			fetchedData: {}
		};
	}

	updateContext = (updatedData) => {
		let newState = Object.assign(this.state, updatedData);
		this.setState(newState);
	};

	// Fetching some random data to illustrate that this will work with any kind of data
	componentDidMount() {
		// Here are only the API info : url, credentials, and so on.
		const fetchData = async () => {
			const url = 'https://swapi.co/api/people/';
			return fetch(url);
		};

		// Here we're processing the data. There are plenty of ways to do this.
		const saveDataIntoState = async () => {
			try {
				const data = await fetchData();
				const json = await data.json();
				// Parsing results // for example, I used 'eye_color'
				const definedCheckboxes = defineCheckboxes(
					json.results,
					'eye_color'
				);
				const checkboxes = definedCheckboxes.reduce(
					(checkboxes, checkbox) => ({
						...checkboxes,
						[checkbox]: false
					}),
					{}
				);
				// Saving both data types into context'state
				this.setState({
					checkboxesData: checkboxes,
					fetchedData: json.results
				});
			} catch (e) {
				console.error('Problem', e);
			}
		};
		// We call the function
		saveDataIntoState();
	}

	render() {
		return (
			<CheckboxesContext.Provider value={this.state}>
				{this.props.children}
			</CheckboxesContext.Provider>
		);
	}
}

export const withContext = (Component) => (props) => (
	<CheckboxesContext.Consumer>
		{(value) => <Component {...props} {...value} />}
	</CheckboxesContext.Consumer>
);
