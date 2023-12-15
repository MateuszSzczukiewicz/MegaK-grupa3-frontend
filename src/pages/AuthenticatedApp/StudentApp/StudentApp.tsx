import { StudentDataFormPage } from './StudentDataFormPage.tsx';
import { Route, Routes } from 'react-router-dom';
import { StudentProfilePage } from './StudentProfilePage.tsx';
import { StudentPage } from '../HrApp/StudentPage';


export const StudentApp = () => {
	return (
		<Routes>
			<Route path="*" element={<StudentDataFormPage />} />
			<Route path="/profile" element={<StudentProfilePage />} />
			<Route path="/students/cv/:studentId" element={<StudentPage />} />
		</Routes>
	);
};
