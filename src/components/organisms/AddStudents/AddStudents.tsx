import { parse } from 'papaparse';
import { useState } from 'react';
import { Student } from '../../../types/HrStudentsAdd.type.ts';
import { FileStudentsTable } from '../../molecules/FileStudentsTable/FileStudentsTable';
import { AddStudentsStyles } from './AddStudents.styles.ts';
import { PrimaryButton } from '../../atoms/PrimaryButton/PrimaryButton';
import { FileDropBoxForm } from '../../molecules/FileDropBoxForm/FileDropBoxForm';

export const AddStudents = () => {
	const [file, setFile] = useState(null);
	const [studentsData, setStudentsData] = useState<null | Student[]>(null);

	const addFileHandler = (e) => {
		const file = e.target.files[0];
		if (!file) setStudentsData(null);
		setFile(file);

		parse(file, {
			header: true,
			complete: (results) => {
				const arr = results.data.map((student, i): Student => {
					const newStudent = [];

					for (const [, value] of Object.entries(student)) {
						newStudent.push(value);
					}

					return {
						id: i,
						email: newStudent[0],
						courseCompletion: newStudent[1],
						courseEngagement: newStudent[2],
						projectDegree: newStudent[3],
						teamProjectDegree: newStudent[4],
						bonusProjectUrls: newStudent[5],
					};
				});
				setStudentsData(arr);
			},
		});
	};

	const changeData = (id: number, nameOfColumn: string, newData: string) => {
		if (!studentsData) return null;

		const row: Student = studentsData.filter((e: Student) => e?.id === id)[0];
		const newRowArr = Object.entries(row);

		newRowArr.forEach((e) => (e[0] === nameOfColumn ? (e[1] = newData) : null));
		const newRowObj = Object.fromEntries(newRowArr) as Student;

		const newStudentsData: Student[] = studentsData.map((student) =>
			student.id === id ? newRowObj : student,
		);
		setStudentsData(newStudentsData);
	};

	const fileSubmit = () => {
		const studentsWithoutIds = studentsData?.map((student) => {
			const { id, ...withoutId } = student;
			return withoutId;
		});
		console.log('Wysyłam:', studentsWithoutIds);
	};

	return (
		<AddStudentsStyles>
			<FileDropBoxForm file={file} addFileHandler={(e) => addFileHandler(e)} />
			<FileStudentsTable studentsData={studentsData} changeData={changeData} />
			<PrimaryButton text={'Zatwierdź i wyślij'} onClick={fileSubmit} />
		</AddStudentsStyles>
	);
};
