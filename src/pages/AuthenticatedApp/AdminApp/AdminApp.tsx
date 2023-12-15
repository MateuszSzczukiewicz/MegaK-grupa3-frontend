import { Route, Routes } from 'react-router-dom';
import { AdminPage } from './AdminPage.tsx';
import { ProfilePage } from '../ProfilePage.tsx';

export const AdminApp = () => {
	return (
		<Routes>
			<Route path="*" element={<AdminPage />} />
			<Route path="/profile" element={<ProfilePage />} />
		</Routes>
	);
};
