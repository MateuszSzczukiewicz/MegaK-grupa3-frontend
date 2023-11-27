import { StyledSection } from './SectionTitle.styles';
import { ReactNode } from 'react';

export const SectionTitle = ({ children }: { children: ReactNode }) => {
	return (
		<StyledSection>
			<h3>{children}</h3>
		</StyledSection>
	);
};
