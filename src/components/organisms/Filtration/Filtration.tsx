import { FC, useState } from 'react';
import type { FiltrationPropsType } from '../../../types/FiltrationType.types.ts';
import {
	ButtonsGroup,
	StyledBackground,
	StyledFiltration,
	StyledH2,
	StyledHeader,
} from './Filtration.styles.ts';
import { INITIAL_STUDENT_STATE } from '../../../consts/initialStudentStateConst.ts';
import { ResultsButton } from '../../atoms/ResultsButton/ResultsButton.tsx';
import { ClearButton } from '../../atoms/ClearButton/ClearButton.tsx';
import { CancelButton } from '../../atoms/CancelButton/CancelButton.tsx';
import { GradeFilter } from '../../molecules/GradeFilter/GradeFilter.tsx';
import { PreferredPlace } from '../../molecules/PreferedPlace/PreferredPlace.tsx';
import { ContractType } from '../../molecules/ContractType/ContractType.tsx';
import { ExpectedSalary } from '../../molecules/ExpectedSalary/ExpectedSalary.tsx';
import { UnpaidConsent } from '../../molecules/UnpaidConsent/UnpaidConsent.tsx';
import { CommercialExperience } from '../../molecules/CommercialExperience/CommercialExperience.tsx';

export const Filtration: FC<FiltrationPropsType> = ({
	toggleFilterVisible,
	filters,
	setFilters,
}) => {
	const [currentFilters, setCurrentFilters] = useState(filters);

	const handleResultsButtonClick = () => {
		setFilters(currentFilters);
		console.log(currentFilters);
	};

	const handleClearButtonClick = () => {
		setCurrentFilters(INITIAL_STUDENT_STATE);
	};

	return (
		<>
			<StyledBackground onClick={toggleFilterVisible} />
			<StyledFiltration>
				<StyledHeader>
					<StyledH2>Filtrowanie</StyledH2>
					<ClearButton handleClearButtonClick={handleClearButtonClick} />
				</StyledHeader>
				<GradeFilter
					title="Ocena przejścia kursu"
					onChange={(value) => setCurrentFilters((prev) => ({ ...prev, courseCompletion: value }))}
				/>
				<GradeFilter
					title="Ocena aktywności i zaangażowania na kursie"
					onChange={(value) => setCurrentFilters((prev) => ({ ...prev, courseEngagement: value }))}
				/>
				<GradeFilter
					title="Ocena kodu w projekcie własnym"
					onChange={(value) => setCurrentFilters((prev) => ({ ...prev, projectDegree: value }))}
				/>
				<GradeFilter
					title="Ocena pracy w zespole Scrum"
					onChange={(value) => setCurrentFilters((prev) => ({ ...prev, teamProjectDegree: value }))}
				/>
				<PreferredPlace
					onChange={(value) => setCurrentFilters((prev) => ({ ...prev, targetWorkCity: value }))}
				/>
				<ContractType
					onChange={(value) =>
						setCurrentFilters((prev) => ({ ...prev, expectedContractType: value }))
					}
				/>
				<ExpectedSalary
					onChange={(value) =>
						setCurrentFilters((prev) => ({
							...prev,
							expectedSalary: value,
						}))
					}
				/>
				<UnpaidConsent
					onChange={(value) =>
						setCurrentFilters((prev) => ({ ...prev, canTakeApprenticeship: value }))
					}
				/>
				<CommercialExperience
					onChange={(value) =>
						setCurrentFilters((prev) => ({ ...prev, monthsOfCommercialExp: value }))
					}
				/>
				<ButtonsGroup>
					<CancelButton toggleFilterVisibile={toggleFilterVisible} />
					<ResultsButton
						toggleFilterVisible={toggleFilterVisible}
						handleResultsButtonClick={handleResultsButtonClick}
					/>
				</ButtonsGroup>
			</StyledFiltration>
		</>
	);
};
