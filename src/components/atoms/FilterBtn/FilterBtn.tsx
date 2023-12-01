import { useState } from 'react';
import { Funnelcon } from '../../../assets/icons/Funnelcon';
import { FilterButtonStyle } from './FilterBtn.styles.ts';

export const FilterBtn = ({ toggleFilterVisibile }) => {
	return (
		<FilterButtonStyle onClick={toggleFilterVisibile}>
			<Funnelcon />
			<span>Filtrowanie</span>
		</FilterButtonStyle>
	);
};
