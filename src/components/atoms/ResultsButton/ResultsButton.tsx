import { MouseEvent, MouseEventHandler } from 'react';
import { StyledButton } from './ResultsButton.styles.ts';

export const ResultsButton = ({
	handleResultsButtonClick,
	toggleFilterVisible,
}: {
	handleResultsButtonClick: MouseEventHandler;
	toggleFilterVisible: MouseEventHandler;
}) => {
	const handleClick = (event: MouseEvent) => {
		handleResultsButtonClick(event);
		toggleFilterVisible(event);
	};

	return <StyledButton onClick={handleClick}>Pokaż wyniki</StyledButton>;
};
