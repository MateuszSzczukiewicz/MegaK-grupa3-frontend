import { ButtonsGroup, StyledH2, StyledHeader, Wrapper } from './Filtration.styles.ts';
import { ClearButton } from '../../atoms/ClearButton/ClearButton.tsx';
import { GradeFilter } from '../../molecules/GradeFilter/GradeFilter.tsx';
import { PreferredPlace } from '../../molecules/PreferedPlace/PreferredPlace.tsx';
import { ContractType } from '../../molecules/ContractType/ContractType.tsx';
import { ExpectedSalary } from '../../molecules/ExpectedSalary/ExpectedSalary.tsx';
import { UnpaidConsent } from '../../molecules/UnpaidConsent/UnpaidConsent.tsx';
import { CommercialExperience } from '../../molecules/CommercialExperience/CommercialExperience.tsx';
import { CancelButton } from '../../atoms/CancelButton/CancelButton.tsx';
import { ResultsButton } from '../../atoms/ResultsButton/ResultsButton.tsx';

export const Filtration = () => {
	return (
		<Wrapper>
			<StyledHeader>
				<StyledH2>Filtrowanie</StyledH2>
				<ClearButton />
			</StyledHeader>
			<GradeFilter title="Ocena przejścia kursu" />
			<GradeFilter title="Ocena aktywności i zaangażowania na kursie" />
			<GradeFilter title="Ocena kodu w projekcie własnym" />
			<GradeFilter title="Ocena pracy w zespole Scrum" />
			<PreferredPlace />
			<ContractType />
			<ExpectedSalary />
			<UnpaidConsent />
			<CommercialExperience />
			<ButtonsGroup>
				<CancelButton />
				<ResultsButton>Pokaż wyniki</ResultsButton>
			</ButtonsGroup>
		</Wrapper>
	);
};
