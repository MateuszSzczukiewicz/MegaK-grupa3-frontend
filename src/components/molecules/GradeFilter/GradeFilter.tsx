import { GradeButton } from '../../atoms/GradeButton/GradeButton.tsx';
import { Group, StyledH3, StyledList } from '../../organisms/Filtration/Filtration.styles.ts';

export const GradeFilter = ({ title }: { title: string }) => {
	return (
		<Group>
			<StyledH3>{title}</StyledH3>
			<StyledList>
				<GradeButton gradeNumber={5} />
				<GradeButton gradeNumber={4} />
				<GradeButton gradeNumber={3} />
				<GradeButton gradeNumber={2} />
				<GradeButton gradeNumber={1} />
			</StyledList>
		</Group>
	);
};
