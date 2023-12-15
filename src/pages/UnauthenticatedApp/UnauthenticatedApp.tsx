import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage.tsx';
import { RegisterPage } from './RegisterPage.tsx';

export const UnauthenticatedApp = ({ onLogin }: { onLogin: (role: number) => void }) => {
	return (
		<Routes>
			<Route path="*" element={<LoginPage onLogin={onLogin} />} />
			<Route path="/register" element={<RegisterPage />} />
		</Routes>
	);
};
