import * as React from 'react';
import { StyledTextArea } from './TextArea.styles';

interface Props {
	children: React.ReactNode;
}

export const TextArea = ({ children }: Props) => {
	return <StyledTextArea>{children}</StyledTextArea>;
};
