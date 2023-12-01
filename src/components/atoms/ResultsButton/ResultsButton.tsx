import { StyledButton } from './ResultsButton.styles.ts';

export const ResultsButton = ({ title, toggleFilterVisibile }) => {
	return <StyledButton onClick={toggleFilterVisibile}>{title}</StyledButton>;
};
