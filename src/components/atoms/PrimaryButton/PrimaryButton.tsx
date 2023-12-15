import { PrimaryButtonStyles } from './PrimaryButton.styles';
import { PrimaryButtonPropsType } from '../../../types/PrimaryButton.types.ts';

export const PrimaryButton = ({ text, onClick }: PrimaryButtonPropsType) => (
	<PrimaryButtonStyles onClick={onClick}>{text}</PrimaryButtonStyles>
);
