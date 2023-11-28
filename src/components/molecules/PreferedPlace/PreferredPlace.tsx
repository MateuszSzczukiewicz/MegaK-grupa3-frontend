import {
	Group,
	StyledButton,
	StyledH3,
	StyledList,
} from '../../organisms/Filtration/Filtration.styles.ts';

export const PreferredPlace = () => {
	return (
		<Group>
			<StyledH3>Preferowane miejsce pracy</StyledH3>
			<StyledList>
				<StyledButton>Praca zdalna</StyledButton>
				<StyledButton>Praca w biurze</StyledButton>
			</StyledList>
		</Group>
	);
};
