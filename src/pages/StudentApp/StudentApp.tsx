import { StudentDataFormPage } from './StudentDataFormPage.tsx';
import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from '../ProfilePage.tsx';
import { LoginPage } from '../LoginPage.tsx';
import { StudentPage } from '../HrApp/StudentPage';

export const StudentApp = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/student" element={<StudentDataFormPage />} />
			<Route path="/students/cv/:studentId" element={<StudentPage />} />
			{/*<Route path="/profile" element={<ProfilePage />} />*/}
		</Routes>
	);
};
