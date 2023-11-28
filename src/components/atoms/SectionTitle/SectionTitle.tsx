import { StyledSection } from './SectionTitle.styles';
import * as React from 'react';

interface Props {
	children: React.ReactNode;
}

export const SectionTitle = ({ children }: Props) => {
	return (
		<StyledSection>
			<h3>{children}</h3>
		</StyledSection>
	);
};
