import { Route, Routes } from 'react-router-dom';
import { AdminPage } from './AdminPage.tsx';

export const AdminApp = () => {
	return (
		<Routes>
			<Route path="*" element={<AdminPage />} />
		</Routes>
	);
};
