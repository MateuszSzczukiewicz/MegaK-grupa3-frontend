import { HrStyle, StudentsMainStyle, TopStyle } from './StudentsPageMain.styles.ts';
import { StudentRow } from '../../molecules/StudentRow/StudentRow.tsx';
import { SearchBar } from '../../atoms/SearchBar/SearchBar.tsx';
import { FilterBtn } from '../../atoms/FilterBtn/FilterBtn.tsx';
import { useCallback, useEffect, useState } from 'react';
import { StudentsPageFooter } from '../../molecules/StudentsPageFooter/StudentsPageFooter.tsx';
import { getStudents } from '../../../api/students/GetStudentsAPI.ts';
import { StudentRowPropsType } from '../../../types/StudentsPageProps.types.ts';
import { Filtration } from '../Filtration/Filtration.tsx';

export const StudentsPageMain = ({ simplified }: { simplified: boolean }) => {
	const [rowsLimit, setRowsLimit] = useState<number>(5);
	const [activePage, setActivePage] = useState<number>(0);
	const [searchBarValue, setSearchBarValue] = useState<string>('');
	const [studentsList, setStudentsList] = useState<StudentRowPropsType[]>([]);
	const [studentsRows, setStudentsRows] = useState<StudentRowPropsType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
	const [filters, setFilters] = useState({
		gradeCourse: 0,
		gradeEngagement: 0,
		gradeCode: 0,
		gradeScrum: 0,
		preferredPlace: '',
		contractType: '',
		expectedSalary: 0,
		unpaidConsent: false,
		monthsCommercialExp: 0,
	});

	const toggleFilterVisible = (): void => {
		setIsFilterVisible(!isFilterVisible);
	};

	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			const data = await getStudents();
			setStudentsList(data);
		} catch (error) {
			console.error('Error getting students:', error);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		(async () => {
			try {
				await fetchData();
			} catch (e) {
				console.error('Error fetching students:', e);
			}
		})();
	}, [fetchData]);

	useEffect(() => {
		setStudentsRows(
			studentsList
				.filter(({ firstName, lastName }) => {
					const fullName = `${firstName} ${lastName}`;
					return fullName.toLowerCase().includes(searchBarValue.toLowerCase());
				})
				.filter((student) => {
					return (
						student.gradeCourse >= filters.gradeCourse &&
						student.gradeEngagement >= filters.gradeEngagement &&
						// Repeat for other filters...
					);
				}),
		);
	}, [searchBarValue, studentsList, filters]);

	const renderRows = studentsRows
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
				LengthOfStudentsList={studentsRows.length}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
		</>
	);
};
