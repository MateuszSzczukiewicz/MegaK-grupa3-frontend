import type { GradeButtonProps } from '../../../types/GradeButtonProps.types.ts';
import { StarIcon } from '../../../assets/icons/StarIcon.tsx';
import { StyledButton } from '../../organisms/Filtration/Filtration.styles.ts';

export const GradeButton = ({ gradeNumber, onChange, isActive }: GradeButtonProps) => {
	const handleGradeClick = () => {
		onChange(gradeNumber);
	};

	return (
		<StyledButton onClick={handleGradeClick} isActive={isActive}>
			{gradeNumber}
			<StarIcon />
		</StyledButton>
	);
};
