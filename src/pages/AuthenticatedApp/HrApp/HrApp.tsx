import { Route, Routes } from 'react-router-dom';
import { StudentPage } from './StudentPage.tsx';
import { StudentsPage } from './StudentsPage.tsx';

export const HrApp = () => {
	return (
		<Routes>
			<Route path="*" element={<StudentsPage />} />
			<Route path="/cv/:studentId" element={<StudentPage />} />
		</Routes>
	);
};
