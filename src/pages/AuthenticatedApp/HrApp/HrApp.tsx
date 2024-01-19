import { Route, Routes } from 'react-router-dom';
import { StudentPage } from './StudentPage.tsx';
import { StudentsPage } from './StudentsPage.tsx';
import { ProfilePage } from '../ProfilePage';

export const HrApp = () => {
	return (
		<Routes>
			<Route path="*" element={<StudentsPage />} />
			<Route path="/cv/:studentId" element={<StudentPage />} />
			<Route path="/profile" element={<ProfilePage />} />
		</Routes>
	);
};
