import { StyledButton } from './ClearButton.styles.ts';
import { MouseEventHandler } from 'react';

export const ClearButton = ({
	toggleFilterVisible,
}: {
	toggleFilterVisible: MouseEventHandler;
}) => {
	return <StyledButton onClick={toggleFilterVisible}>Wyczyść wszystkie</StyledButton>;
};
