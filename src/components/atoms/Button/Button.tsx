import { StyledButton } from './Button.styles';
import { ReactNode } from 'react';

export const Button = ({ children }: { children: ReactNode }) => (
	<StyledButton>{children}</StyledButton>
);
