import { Route, Routes } from 'react-router-dom';
import { StudentsPage } from "./StudentsPage";

export const Root = () => {
	return (
		<Routes>
			<Route path="/students" element={ <StudentsPage /> }/>
		</Routes>
	);
};
