import { EmploymentExpectationSection } from './EmploymentExpectation.styles';
import * as React from 'react';

interface Props {
	expectationName: string;
	children: React.ReactNode;
}

export const GradeOrEmplExpectElement = ({ expectationName, children }: Props) => {
	return (
		<EmploymentExpectationSection>
			<p>{expectationName}</p>
			<div>{children}</div>
		</EmploymentExpectationSection>
	);
};
