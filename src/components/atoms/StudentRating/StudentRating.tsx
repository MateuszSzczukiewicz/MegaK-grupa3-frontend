import {
	BStyle,
	RatingValueStyle,
	StudentRatingStyles,
	TitleStyle,
} from './StudentRating.styles.ts';
import { StudentSingleRatingType } from '../../../types/StudentsPageProps.types.ts';

export const StudentRating = ({ title, ratingValue }: StudentSingleRatingType) => {
	return (
		<StudentRatingStyles>
			<TitleStyle>{title}</TitleStyle>
			<RatingValueStyle>
				<BStyle>{ratingValue}</BStyle>
				{typeof ratingValue === 'number' ? '/5' : null}
			</RatingValueStyle>
		</StudentRatingStyles>
	);
};
