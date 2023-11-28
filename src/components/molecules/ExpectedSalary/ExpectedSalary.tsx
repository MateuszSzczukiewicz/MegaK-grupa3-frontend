import {
	Group,
	StyledH3,
	StyledInput,
	StyledList,
} from '../../organisms/Filtration/Filtration.styles.ts';
import { StyledSpan } from './ExpectedSalary.styles.ts';

export const ExpectedSalary = () => {
	return (
		<Group>
			<StyledH3>Oczekiwane wynagrodzenie miesięczne netto</StyledH3>
			<StyledList>
				<label>
					<StyledSpan>Od:</StyledSpan>
					<StyledInput type="text" placeholder="np. 1000zł" />
				</label>
				<label>
					<StyledSpan>Do:</StyledSpan>
					<StyledInput type="text" placeholder="np. 10000zł" />
				</label>
			</StyledList>
		</Group>
	);
};
