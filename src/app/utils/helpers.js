// Custom made function which extract all values from one property of the objects
// from an array and then return these differents values with no duplicates
export const extractPropertyValues = (arrayOfObjects, property) => {
	// Get differents values
	const getAllProperties = () => {
		let arrayOfPropertyValues = [];
		Object.values(arrayOfObjects).forEach((val) => {
			arrayOfPropertyValues.push(val[property]);
		});
		return arrayOfPropertyValues;
	};

	// Now, lets remove duplicates
	const removeDuplicates = (toSort) => [...new Set(toSort)];
	const valuesList = removeDuplicates(getAllProperties());

	// And we return a nice and clean array of all values that the called property had on all objects
	return valuesList;
};

// I put that one here because we often need that little one across the app
export const capitalizeFirstLetter = (string) => {
	let toCapitalize = string;
	return toCapitalize.charAt(0).toUpperCase() + toCapitalize.slice(1);
};
