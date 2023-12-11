import { Route, Routes } from 'react-router-dom';
// import { StudentPage } from './StudentPage';
// import { LoginPage } from './LoginPage.tsx';
// import { Homepage } from './Homepage.tsx';
import { StudentDataFormPage } from './StudentDataFormPage';
import { AdminAddHrPage } from './AdminAddHrPage';
// import { StudentsPage } from "./StudentsPage";

export const Root = () => {
	return (
		<Routes>
			{/*<Route path="/" element={<Homepage />} />*/}
			{/*<Route path="/login" element={<LoginPage />} />*/}
			{/*<Route path="/student" element={<StudentPage />} />*/}
			<Route path="/student-form" element={<StudentDataFormPage />} />
			<Route path="/admin-add-hr-form" element={<AdminAddHrPage />} />
			{/*<Route path="/students" element={ <StudentsPage /> }/>*/}
		</Routes>
	);
};
