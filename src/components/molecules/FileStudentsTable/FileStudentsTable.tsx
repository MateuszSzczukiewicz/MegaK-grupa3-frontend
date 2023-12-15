import { TableStyle } from './FileStudentsTable.styles.ts';
import { FileStudentsTableProps, Student } from '../../../types/HrStudentsAdd.type.ts';
import { FileStudentsTableElement } from '../../atoms/FileStudentsTableElement/FileStudentsTableElement';

export const FileStudentsTable = ({ studentsData, changeData }: FileStudentsTableProps) => {
	const studentsFromFile = studentsData?.map((student: Student) => (
		<tr key={student.id}>
			<FileStudentsTableElement
				id={student.id}
				column={'email'}
				text={student.email}
				type={'email'}
				changeData={changeData}
			/>
			<FileStudentsTableElement
				id={student.id}
				column={'courseCompletion'}
				text={student.courseCompletion}
				changeData={changeData}
			/>
			<FileStudentsTableElement
				id={student.id}
				column={'courseEngagement'}
				text={student.courseEngagement}
				changeData={changeData}
			/>
			<FileStudentsTableElement
				id={student.id}
				column={'projectDegree'}
				text={student.projectDegree}
				changeData={changeData}
			/>
			<FileStudentsTableElement
				id={student.id}
				column={'teamProjectDegree'}
				text={student.teamProjectDegree}
				changeData={changeData}
			/>
			<FileStudentsTableElement
				id={student.id}
				column={'bonusProjectUrls'}
				text={student.bonusProjectUrls}
				changeData={changeData}
			/>
		</tr>
	));

	return (
		<TableStyle>
			<tbody>
				<tr>
					<th>e-mail</th>
					<th>Course completion</th>
					<th>Course engagement</th>
					<th>Project degree</th>
					<th>Team project degree</th>
					<th>Bonus project urls</th>
				</tr>
				{studentsFromFile}
			</tbody>
		</TableStyle>
	);
};
