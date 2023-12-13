import { Route, Routes } from 'react-router-dom';
import { AdminPage } from './AdminPage';

export const AdminApp = () => {
	return (
		<Routes>
			<Route path="/admin" element={<AdminPage />} />
		</Routes>
	);
};
