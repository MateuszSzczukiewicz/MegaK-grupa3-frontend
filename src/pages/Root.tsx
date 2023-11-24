import { Route, Routes } from 'react-router-dom';
import { StudentCVTemplate } from '../components/templates/StudentCVTemplate/StudentCVTemplate';
// import { LoginPage } from './LoginPage.tsx';

export const Root = () => {
	return (
		<Routes>
			{/*<Route path="/" element={<LoginPage />} />*/}
			<Route path="/student" element={<StudentCVTemplate />} />
		</Routes>
	);
};
