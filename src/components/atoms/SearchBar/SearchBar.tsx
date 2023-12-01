import { SearchBarStyles, LoupDivStyle, SearchInputStyle } from './SearchBar.styles.ts';
import { MagnifierIcon } from '../../../assets/icons/MagnifierIcon';

export const SearchBar = ({ setSearchBarValue }) => (
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
