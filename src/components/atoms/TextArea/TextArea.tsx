import { StyledTextArea } from './TextArea.styles';
import { ReactNode } from 'react';

export const TextArea = ({ children }: { children: ReactNode }) => (
	<StyledTextArea>{children}</StyledTextArea>
);
