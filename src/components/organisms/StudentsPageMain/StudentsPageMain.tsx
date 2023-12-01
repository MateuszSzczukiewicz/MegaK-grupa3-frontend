import { StudentsMainStyle, TopStyle, HrStyle } from './StudentsPageMain.styles.ts';
import { StudentRow } from '../../molecules/StudentRow/StudentRow.tsx';
import { SearchBar } from '../../atoms/SearchBar/SearchBar.tsx';
import { FilterBtn } from '../../atoms/FilterBtn/FilterBtn.tsx';
import { useEffect, useState } from 'react';
import { StudentsPageFooter } from '../../molecules/StudentsPageFooter/StudentsPageFooter.tsx';
import { StudentsPageMainPropsType } from '../../../types/StudentsPagePropsTypes/StudentsPageProps.types.ts';

export const StudentsPageMain = ({
	simplified,
	studentsList,
	toggleFilterVisibile,
}: StudentsPageMainPropsType) => {
	const [rowsLimit, setRowsLimit] = useState<number>(5);
	const [activePage, setActivePage] = useState<number>(0);
	const [searchBarValue, setSearchBarValue] = useState<string>('');

	const [studentsRows, setStudentsRows] = useState(studentsList);

	useEffect(() => {
		setStudentsRows(
			studentsList.filter((student) =>
				`${student.name} ${student.surname}`.includes(searchBarValue),
			),
		);
	}, [searchBarValue]);

	const renderRows = studentsRows.map((student, i) => {
		const condition = i + 1 > activePage * rowsLimit && i < (activePage + 1) * rowsLimit;

		return condition ? (
			<StudentRow
				key={student.id}
				simplified={simplified}
				name={student.name}
				surname={student.surname}
				reservationDate={student.reservationDate}
				gitHubUserName={student.gitHubUserName}
			/>
		) : null;
	});

	return (
		<>
			<StudentsMainStyle>
				<TopStyle>
					<SearchBar setSearchBarValue={setSearchBarValue} />
					<FilterBtn toggleFilterVisibile={toggleFilterVisibile} />
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
