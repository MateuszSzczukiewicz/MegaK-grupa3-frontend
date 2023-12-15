import { StyledButton } from './ClearButton.styles.ts';
import { MouseEventHandler } from 'react';

export const ClearButton = ({
	handleClearButtonClick,
}: {
	handleClearButtonClick: MouseEventHandler;
}) => {
	return <StyledButton onClick={handleClearButtonClick}>Wyczyść wszystkie</StyledButton>;
};
