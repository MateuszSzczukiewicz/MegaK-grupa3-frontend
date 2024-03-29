import { ReactNode } from 'react';
import { EmploymentExpectationSection } from './EmploymentExpectation.styles';

export const EmploymentExpectation = ({
	expectationName,
	children,
}: {
	expectationName: string;
	children: ReactNode;
}) => (
	<EmploymentExpectationSection>
		<p>{expectationName}</p>
		<div>{children}</div>
	</EmploymentExpectationSection>
);
