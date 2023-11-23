import { Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage.tsx';
// import { LoginPage } from './LoginPage.tsx';
import { StudentsPage } from "./StudentsPage";

export const Root = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			{/*<Route path="/" element={<LoginPage />} />*/}
			<Route path="/students" element={ <StudentsPage /> }/>
		</Routes>
	);
};
