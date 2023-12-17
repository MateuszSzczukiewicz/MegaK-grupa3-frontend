import { useState } from 'react';
import { GradeButton } from '../../atoms/GradeButton/GradeButton.tsx';
import { Group, StyledH3, StyledList } from '../../organisms/Filtration/Filtration.styles.ts';

export const GradeFilter = ({
	title,
	onChange,
}: {
	title: string;
	onChange: (value: number) => void;
}) => {
	const [activeGrade, setActiveGrade] = useState<number | null>(null);

	const handleGradeChange = (gradeNumber: number) => {
		onChange(gradeNumber);
		setActiveGrade(gradeNumber);
	};

	return (
		<Group>
			<StyledH3>{title}</StyledH3>
			<StyledList>
				{[5, 4, 3, 2, 1].map((gradeNumber) => (
					<GradeButton
						key={gradeNumber}
						gradeNumber={gradeNumber}
						onChange={handleGradeChange}
						isActive={gradeNumber === activeGrade}
					/>
				))}
			</StyledList>
		</Group>
	);
};
