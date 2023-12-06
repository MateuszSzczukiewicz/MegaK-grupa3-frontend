import {
	ButtonsGroup,
	StyledBackground,
	StyledFiltration,
	StyledH2,
	StyledHeader,
} from './Filtration.styles.ts';
import { ClearButton } from '../../atoms/ClearButton/ClearButton.tsx';
import { GradeFilter } from '../../molecules/GradeFilter/GradeFilter.tsx';
import { PreferredPlace } from '../../molecules/PreferedPlace/PreferredPlace.tsx';
import { ContractType } from '../../molecules/ContractType/ContractType.tsx';
import { ExpectedSalary } from '../../molecules/ExpectedSalary/ExpectedSalary.tsx';
import { UnpaidConsent } from '../../molecules/UnpaidConsent/UnpaidConsent.tsx';
import { CommercialExperience } from '../../molecules/CommercialExperience/CommercialExperience.tsx';
import { CancelButton } from '../../atoms/CancelButton/CancelButton.tsx';
import { ResultsButton } from '../../atoms/ResultsButton/ResultsButton.tsx';
import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

export const Filtration = ({
	toggleFilterVisible,
	filters,
	setFilters,
}: {
	toggleFilterVisible: MouseEventHandler;
	filters: any;
	setFilters: Dispatch<SetStateAction<any>>;
}) => {
	return (
		<>
			<StyledBackground onClick={toggleFilterVisible} />
			<StyledFiltration>
				<StyledHeader>
					<StyledH2>Filtrowanie</StyledH2>
					<ClearButton toggleFilterVisible={toggleFilterVisible} />
				</StyledHeader>
				<GradeFilter
					title="Ocena przejścia kursu"
					value={filters.gradeCourse}
					onChange={(value) => setFilters((prev) => ({ ...prev, gradeCourse: value }))}
				/>
				<GradeFilter
					title="Ocena aktywności i zaangażowania na kursie"
					value={filters.gradeEngagement}
					onChange={(value) => setFilters((prev) => ({ ...prev, gradeEngagement: value }))}
				/>
				<GradeFilter
					title="Ocena kodu w projekcie własnym"
					value={filters.gradeCode}
					onChange={(value) => setFilters((prev) => ({ ...prev, gradeCode: value }))}
				/>
				<GradeFilter
					title="Ocena pracy w zespole Scrum"
					value={filters.gradeScrum}
					onChange={(value) => setFilters((prev) => ({ ...prev, gradeScrum: value }))}
				/>
				<PreferredPlace />
				<ContractType />
				<ExpectedSalary />
				<UnpaidConsent />
				<CommercialExperience />
				<ButtonsGroup>
					<CancelButton toggleFilterVisibile={toggleFilterVisible} />
					<ResultsButton toggleFilterVisibile={toggleFilterVisible} title="Pokaż wyniki" />
				</ButtonsGroup>
			</StyledFiltration>
		</>
	);
};
