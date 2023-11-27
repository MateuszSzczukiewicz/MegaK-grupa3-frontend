import * as React from 'react';
import { StarIcon } from '../../../assets/icons/StarIcon';
import { GradeStarsSection, Star } from './GradeStars.styles';

export const GradeStars = ({ grade }: { grade: number }) => {
	return (
		<GradeStarsSection>
			<p>
				<span>{grade}</span> /5
			</p>

			{[1, 2, 3, 4, 5].map((star) => {
				return grade >= star ? (
					<Star key={star} $red>
						<StarIcon />
					</Star>
				) : (
					<Star key={star}>
						<StarIcon />
					</Star>
				);
			})}
		</GradeStarsSection>
	);
};
