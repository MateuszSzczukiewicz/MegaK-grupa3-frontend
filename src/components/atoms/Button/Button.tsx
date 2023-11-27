import { StyledButton } from './Button.styles';
import { ReactNode } from 'react';

export const Button = ({ children }: { children: ReactNode }) => {
	return <StyledButton>{children}</StyledButton>;
};
