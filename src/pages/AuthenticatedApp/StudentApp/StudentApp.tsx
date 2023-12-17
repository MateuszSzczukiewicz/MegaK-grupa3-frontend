import { StudentDataFormPage } from './StudentDataFormPage.tsx';
import { Route, Routes } from 'react-router-dom';
import { StudentPage } from '../HrApp/StudentPage';
import {ProfilePage} from "../ProfilePage";


export const StudentApp = () => {
	return (
		<Routes>
			<Route path="*" element={<StudentDataFormPage />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/students/cv/:studentId" element={<StudentPage />} />
		</Routes>
	);
};
