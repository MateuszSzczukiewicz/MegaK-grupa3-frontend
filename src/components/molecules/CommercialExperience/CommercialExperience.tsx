import { Group, StyledH3, StyledInput } from '../../organisms/Filtration/Filtration.styles.ts';

export const CommercialExperience = () => {
	return (
		<Group>
			<StyledH3>Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</StyledH3>
			<StyledInput type="number" min="0" defaultValue="0" />
		</Group>
	);
};
