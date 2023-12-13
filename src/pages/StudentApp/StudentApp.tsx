import { StudentDataFormPage } from './StudentDataFormPage.tsx';
import { Route, Routes } from 'react-router-dom';
import { StudentProfilePage } from './StudentProfilePage.tsx';
import { LoginPage } from '../LoginPage.tsx';

export const StudentApp = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/student" element={<StudentDataFormPage />} />
			<Route path="/profile" element={<StudentProfilePage />} />
		</Routes>
	);
};
