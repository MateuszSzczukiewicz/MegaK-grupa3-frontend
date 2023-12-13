import { Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage.tsx';
import { LoginPage } from './LoginPage.tsx';
import { StudentPage } from './StudentPage';
import { StudentsPage } from "./StudentsPage";
import {StudentProfilePage} from "./StudentProfilePage";
import {AddStudents} from "../components/organisms/AddStudents/AddStudents";

export const Root = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/login" element={<LoginPage />} />
      		<Route path="/student" element={<StudentPage />} />
			<Route path="/students" element={ <StudentsPage /> }/>
			<Route path="/profile" element={ <StudentProfilePage /> }/>
			<Route path="/add-students" element={ <AddStudents /> }/>
		</Routes>
	);
};
