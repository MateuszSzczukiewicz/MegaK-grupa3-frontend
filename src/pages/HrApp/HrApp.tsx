import { Route, Routes } from 'react-router-dom';
import { StudentPage } from './StudentPage.tsx';
import { StudentsPage } from './StudentsPage.tsx';
import { HrProfile } from './HrProfilePage.tsx';

export const HrApp = () => {
	return (
		<Routes>
			<Route path="/students" element={<StudentsPage />} />
			<Route path="/students/cv/:studentId" element={<StudentPage />} />
			<Route path="/hr-profile" element={<HrProfile />} />
		</Routes>
	);
};
