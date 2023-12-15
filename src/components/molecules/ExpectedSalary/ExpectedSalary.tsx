import { ChangeEvent, useState } from 'react';
import {
	Group,
	StyledH3,
	StyledInput,
	StyledList,
} from '../../organisms/Filtration/Filtration.styles.ts';
import { StyledSpan } from './ExpectedSalary.styles.ts';

export const ExpectedSalary = ({
	onChange,
}: {
	onChange: (value: { min: number; max: number }) => void;
}) => {
	const [minSalary, setMinSalary] = useState(0);
	const [maxSalary, setMaxSalary] = useState(0);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'min') {
			setMinSalary(parseInt(value, 10) || 0);
		} else if (name === 'max') {
			setMaxSalary(parseInt(value, 10) || 0);
		}
	};

	const handleBlur = () => {
		onChange({ min: minSalary, max: maxSalary });
	};

	return (
		<Group>
			<StyledH3>Oczekiwane wynagrodzenie miesięczne netto</StyledH3>
			<StyledList>
				<label>
					<StyledSpan>Od:</StyledSpan>
					<StyledInput
						type="number"
						placeholder="np. 1000"
						min="0"
						name="min"
						value={minSalary}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</label>
				<label>
					<StyledSpan>Do:</StyledSpan>
					<StyledInput
						type="number"
						placeholder="np. 10000"
						min="0"
						name="max"
						value={maxSalary}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</label>
			</StyledList>
		</Group>
	);
};
