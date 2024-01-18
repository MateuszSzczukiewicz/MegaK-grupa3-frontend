import { Route, Routes } from 'react-router-dom';
import { AdminPage } from './AdminPage.tsx';
import { ProfilePage } from '../ProfilePage';

export const AdminApp = () => (
	<Routes>
		<Route path="*" element={<AdminPage />} />
		<Route path="/profile" element={<ProfilePage />} />
	</Routes>
);
