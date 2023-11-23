import { Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage.tsx';
import { StudentsPage } from "./StudentsPage";

export const Root = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/students" element={ <StudentsPage /> }/>
		</Routes>
	);
};
