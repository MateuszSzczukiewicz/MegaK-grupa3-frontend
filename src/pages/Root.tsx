import { Route, Routes } from 'react-router-dom';
import { StudentPage } from './StudentPage';
// import { LoginPage } from './LoginPage.tsx';

export const Root = () => {
	return (
		<Routes>
			{/*<Route path="/" element={<LoginPage />} />*/}
			<Route path="/student" element={<StudentPage />} />
		</Routes>
	);
};
