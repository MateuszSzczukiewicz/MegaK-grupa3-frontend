import { StyledButton } from './ClearButton.styles.ts';

export const ClearButton = ({ toggleFilterVisibile }) => {
	return <StyledButton onClick={toggleFilterVisibile}>Wyczyść wszystkie</StyledButton>;
};
