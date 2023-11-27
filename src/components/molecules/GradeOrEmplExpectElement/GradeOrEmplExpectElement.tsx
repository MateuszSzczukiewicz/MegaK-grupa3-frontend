import { GradeOrEmploymentExpectationSection } from './GradeOrEmplExpectElement.styles';
import type { GradeOrEmplExpectElementType } from '../../../types/GradeOrEmplExpectElementType';

export const GradeOrEmplExpectElement = ({
	expectationName,
	children,
}: GradeOrEmplExpectElementType) => {
	return (
		<GradeOrEmploymentExpectationSection>
			<p>{expectationName}</p>
			<div>{children}</div>
		</GradeOrEmploymentExpectationSection>
	);
};
