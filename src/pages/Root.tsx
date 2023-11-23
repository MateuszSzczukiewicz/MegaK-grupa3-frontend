import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage.tsx';

export const Root = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
		</Routes>
	);
};
