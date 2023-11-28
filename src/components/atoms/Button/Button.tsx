import { StyledButton } from './Button.styles';
import * as React from 'react';

interface Props {
	children: React.ReactNode;
}

export const Button = ({ children }: Props) => {
	return <StyledButton>{children}</StyledButton>;
};
