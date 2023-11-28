import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage.tsx';
import { Homepage } from './Homepage.tsx';

export const Root = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	);
};
