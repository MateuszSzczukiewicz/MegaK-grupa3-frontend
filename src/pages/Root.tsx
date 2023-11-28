import { Route, Routes } from 'react-router-dom';
import { StudentPage } from './StudentPage';
import { LoginPage } from './LoginPage.tsx';
import { Homepage } from './Homepage.tsx';

export const Root = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/login" element={<LoginPage />} />
      <Route path="/student" element={<StudentPage />} /> 
		</Routes>
	);
};
