import { useState } from 'react';

export const useFilterVisibility = (initialState: boolean) => {
	const [isFilterVisible, setIsFilterVisible] = useState(initialState);

	const toggleFilterVisible = () => {
		setIsFilterVisible(!isFilterVisible);
	};

	return {
		isFilterVisible,
		toggleFilterVisible,
	};
};
