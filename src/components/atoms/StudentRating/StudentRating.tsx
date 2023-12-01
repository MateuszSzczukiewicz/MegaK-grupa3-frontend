import {
	BStyle,
	RatingValueStyle,
	StudentRatingStyles,
	TitleStyle,
} from './StudentRating.styles.ts';
import { StudentRatingPropsType } from '../../../types/StudentsPagePropsTypes/StudentsPageProps.types';

export const StudentRating = ({ title, ratingValue }: StudentRatingPropsType) => {
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
