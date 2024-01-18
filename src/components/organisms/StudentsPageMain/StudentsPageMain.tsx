import { useCallback, useEffect, useMemo, useState } from 'react';
import { HrStyle, StudentsMainStyle, TopStyle } from './StudentsPageMain.styles.ts';
import type { StudentRowPropsType } from '../../../types/StudentsPageProps.types.ts';
import { INITIAL_STUDENT_STATE } from '../../../consts/initialStudentStateConst.ts';
import { getStudents } from '../../../api/students/GetStudentsAPI.ts';
import { useFilteredData } from '../../../hooks/useFilteredData.tsx';
import { useFilterVisibility } from '../../../hooks/useFilterVisibility.tsx';
import { Filtration } from '../Filtration/Filtration.tsx';
import { SearchBar } from '../../atoms/SearchBar/SearchBar.tsx';
import { FilterBtn } from '../../atoms/FilterBtn/FilterBtn.tsx';
import { StudentRow } from '../../molecules/StudentRow/StudentRow.tsx';
import { StudentsPageFooter } from '../../molecules/StudentsPageFooter/StudentsPageFooter.tsx';
import { StudentStateType } from '../../../types/StudentStateType.types.ts';
import { getStudentsForInterview } from '../../../api/students/GetStudentsForInterviewAPI';

export const StudentsPageMain = ({ simplified }: { simplified: boolean }) => {
	const [rowsLimit, setRowsLimit] = useState<number>(5);
	const [activePage, setActivePage] = useState<number>(0);
	const [searchBarValue, setSearchBarValue] = useState<string>('');
	const [studentsList, setStudentsList] = useState<StudentRowPropsType[]>([]);
	const [filters, setFilters] = useState<StudentStateType>(INITIAL_STUDENT_STATE);
	const { isFilterVisible, toggleFilterVisible } = useFilterVisibility(false);
	const filteredData = useFilteredData(studentsList, filters, searchBarValue);

	const fetchData = useCallback(async () => {
		try {
			if (simplified) {
				const data = await getStudents();
				setStudentsList(data);
			} else {
				const data = await getStudentsForInterview();
				setStudentsList(data);
			}
		} catch (error) {
			console.error('Error getting students:', error);
		}
	}, [simplified]);

	useEffect(() => {
		(async () => {
			try {
				await fetchData();
			} catch (e) {
				console.error('Error fetching students:', e);
			}
		})();
	}, [simplified]);

	const renderRows = useMemo(() => {
		return filteredData
			.slice(activePage * rowsLimit, (activePage + 1) * rowsLimit)
			.map((student: StudentRowPropsType) => (
				<StudentRow
					key={student.studentId}
					studentId={student.studentId}
					simplified={simplified}
					firstName={student.firstName}
					lastName={student.lastName}
					reservationDate={student.reservationDate}
					gitHubUserName={student.gitHubUserName}
					courseCompletion={student.courseCompletion}
					courseEngagement={student.courseEngagement}
					projectDegree={student.projectDegree}
					teamProjectDegree={student.teamProjectDegree}
					expectedTypeWork={student.expectedTypeWork}
					targetWorkCity={student.targetWorkCity}
					expectedContractType={student.expectedContractType}
					expectedSalary={student.expectedSalary}
					canTakeApprenticeship={student.canTakeApprenticeship}
					monthsOfCommercialExp={student.monthsOfCommercialExp}
				/>
			));
	}, [filteredData, activePage, rowsLimit, simplified]);

	return (
		<>
			{isFilterVisible ? (
				<Filtration
					toggleFilterVisible={toggleFilterVisible}
					filters={filters}
					setFilters={setFilters}
				/>
			) : null}
			<StudentsMainStyle>
				<TopStyle>
					<SearchBar setSearchBarValue={setSearchBarValue} />
					<FilterBtn toggleFilterVisible={toggleFilterVisible} />
				</TopStyle>
				<HrStyle />
				{renderRows}
			</StudentsMainStyle>
			<StudentsPageFooter
				rowsLimit={rowsLimit}
				setRowsLimit={setRowsLimit}
				LengthOfStudentsList={filteredData.length}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
		</>
	);
};
