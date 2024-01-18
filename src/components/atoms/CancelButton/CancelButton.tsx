import { StyledButton } from './CancelButton.styles.ts';
import { MouseEventHandler } from 'react';

export const CancelButton = ({
	toggleFilterVisibile,
}: {
	toggleFilterVisibile: MouseEventHandler;
}) => <StyledButton onClick={toggleFilterVisibile}>Anuluj</StyledButton>;
