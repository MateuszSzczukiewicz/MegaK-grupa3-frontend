import { PrimaryButtonStyles } from './PrimaryButton.styles.ts';

export const PrimaryButton = ({ text, onClick }: { text: string; onClick?: () => void }) => (
	<PrimaryButtonStyles onClick={onClick}>{text}</PrimaryButtonStyles>
);
