import { ChangeEvent } from 'react';
import { Group, StyledH3, StyledInput } from '../../organisms/Filtration/Filtration.styles.ts';

export const CommercialExperience = ({ onChange }: { onChange: (value: number) => void }) => {
	const handleExperienceChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value, 10) || 0;
		onChange(value);
	};

	return (
		<Group>
			<StyledH3>Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu</StyledH3>
			<StyledInput
				type="number"
				placeholder="0 miesięcy"
				min="0"
				onChange={handleExperienceChange}
			/>
		</Group>
	);
};
