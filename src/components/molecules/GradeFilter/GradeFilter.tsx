import { GradeButton } from '../../atoms/GradeButton/GradeButton.tsx';
import { Group, StyledH3, StyledList } from '../../organisms/Filtration/Filtration.styles.ts';
import { useState } from 'react';

export const GradeFilter = ({
	title,
	onChange,
}: {
	title: string;
	onChange: (value: number) => void;
}) => {
	const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

	const handleGradeClick = (gradeNumber: number) => {
		setSelectedGrade(gradeNumber);
		onChange(gradeNumber);
	};

	return (
		<Group>
			<StyledH3>{title}</StyledH3>
			<StyledList>
				{[5, 4, 3, 2, 1].map((gradeNumber) => (
					<GradeButton
						key={gradeNumber}
						gradeNumber={gradeNumber}
						isActive={selectedGrade === gradeNumber}
						onClick={() => handleGradeClick(gradeNumber)}
					/>
				))}
			</StyledList>
		</Group>
	);
};
