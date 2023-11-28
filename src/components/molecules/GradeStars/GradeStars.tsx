import * as React from 'react';
import { StarIcon } from '../../../assets/icons/StarIcon';
import { GradeStarsSection } from './GradeStars.styles';

interface Props {
	grade: number;
}

export const GradeStars = ({ grade }: Props) => {
	return (
		<GradeStarsSection>
			<p>
				<span>{grade}</span> /5
			</p>
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
		</GradeStarsSection>
	);
};
