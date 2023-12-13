import { GradeStarsSection } from './GradeStars.styles.tsx';
import { StarIcon } from '../../../assets/icons/StarIcon.tsx';

export const GradeStars = ({ gradeNumber }: { gradeNumber: number }) => {
	return (
		<GradeStarsSection>
			<p>
				<span>{gradeNumber}</span> / 5
			</p>
			<div>
				{[...Array(5)].map((_, index) => (
					<StarIcon key={index} isGray={index >= gradeNumber} />
				))}
			</div>
		</GradeStarsSection>
	);
};
