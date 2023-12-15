import { StudentDataFormPage } from './StudentDataFormPage.tsx';
import { Route, Routes } from 'react-router-dom';
import { StudentPage } from '../HrApp/StudentPage';
import { ProfilePage } from '../ProfilePage.tsx';

export const StudentApp = () => {
	return (
		<Routes>
			<Route path="*" element={<StudentDataFormPage />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/cv/:studentId" element={<StudentPage />} />
		</Routes>
	);
};
