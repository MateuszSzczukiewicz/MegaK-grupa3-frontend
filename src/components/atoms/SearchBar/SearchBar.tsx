import { SearchBarStyles, LoupDivStyle, SearchInputStyle } from './SearchBar.styles.ts';
import { MagnifierIcon } from '../../../assets/icons/MagnifierIcon';
import { FC } from 'react';

type SearchBarProps = {
	setSearchBarValue: (value: string) => void;
};

export const SearchBar: FC<SearchBarProps> = ({ setSearchBarValue }) => (
	<SearchBarStyles>
		<LoupDivStyle>
			<MagnifierIcon />
		</LoupDivStyle>
		<SearchInputStyle
			onChange={(e) => setSearchBarValue(e.target.value)}
			type="text"
			placeholder="Szukaj"
		/>
	</SearchBarStyles>
);
