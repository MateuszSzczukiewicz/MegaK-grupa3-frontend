import { useMemo } from 'react';
import { StudentRowPropsType } from '../types/StudentsPageProps.types';
import { StudentStateType } from '../types/StudentStateType.types.ts';

export const useFilteredData = (
	studentsList: StudentRowPropsType[],
	filters: StudentStateType,
	searchBarValue: string,
): StudentRowPropsType[] => {
	return useMemo(() => {
		return studentsList
			.filter(({ firstName, lastName }) => {
				const fullName = `${firstName} ${lastName}`;
				return fullName.toLowerCase().includes(searchBarValue.toLowerCase());
			})
			.filter((student) => {
				return (
					student.courseCompletion >= filters.courseCompletion &&
					student.courseEngagement >= filters.courseEngagement &&
					student.projectDegree >= filters.projectDegree &&
					student.teamProjectDegree >= filters.teamProjectDegree &&
					(filters.targetWorkCity === '' || student.targetWorkCity === filters.targetWorkCity) &&
					(filters.expectedContractType === '' ||
						student.expectedContractType === filters.expectedContractType) &&
					filters.expectedSalary.min <= student.expectedSalary &&
					student.expectedSalary <= filters.expectedSalary.max &&
					(!filters.canTakeApprenticeship || student.canTakeApprenticeship) &&
					(filters.monthsOfCommercialExp === 0 ||
						student.monthsOfCommercialExp >= filters.monthsOfCommercialExp)
				);
			});
	}, [studentsList, filters, searchBarValue]);
};
