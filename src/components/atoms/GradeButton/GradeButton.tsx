import { StarIcon } from '../../../assets/icons/StarIcon.tsx';
import { StyledButton } from '../../organisms/Filtration/Filtration.styles.ts';

export const GradeButton = ({ gradeNumber }: { gradeNumber: number }) => {
	return (
		<StyledButton>
			{gradeNumber}
			<StarIcon />
		</StyledButton>
	);
};
