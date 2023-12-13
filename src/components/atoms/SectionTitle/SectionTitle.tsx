import { ReactNode } from 'react';
import { StyledSection } from './SectionTitle.styles';

export const SectionTitle = ({ children }: { children: ReactNode }) => {
	return (
		<StyledSection>
			<h3>{children}</h3>
		</StyledSection>
	);
};
