import { StyledButton } from './CancelButton.styles.ts';

export const CancelButton = ({ toggleFilterVisibile }) => {
	return <StyledButton onClick={toggleFilterVisibile}>Anuluj</StyledButton>;
};
