import { Group, StyledH3, StyledInput } from '../../organisms/Filtration/Filtration.styles.ts';
import { ChangeEvent } from 'react';

export const GradeFilter = ({
	title,
	onChange,
}: {
	title: string;
	onChange: (value: number) => void;
}) => {
	const handleGradeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value, 10) || 1;
		onChange(value);
	};

	return (
		<Group>
			<StyledH3>{title}</StyledH3>
			<StyledInput type="number" min={1} max={5} placeholder="1" onChange={handleGradeChange} />
		</Group>
	);
};
