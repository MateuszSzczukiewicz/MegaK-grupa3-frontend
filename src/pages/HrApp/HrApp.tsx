import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../LoginPage.tsx';
import { StudentPage } from './StudentPage.tsx';
import { StudentsPage } from './StudentsPage.tsx';

export const HrApp = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/students" element={<StudentsPage />} />
			<Route path="/studentCV" element={<StudentPage />} />
		</Routes>
	);
};
