import { MouseEventHandler } from 'react';
import { Funnelcon } from '../../../assets/icons/Funnelcon';
import { FilterButtonStyle } from './FilterBtn.styles.ts';

export const FilterBtn = ({ toggleFilterVisible }: { toggleFilterVisible: MouseEventHandler }) => {
	return (
		<FilterButtonStyle onClick={toggleFilterVisible}>
			<Funnelcon />
			<span>Filtrowanie</span>
		</FilterButtonStyle>
	);
};
