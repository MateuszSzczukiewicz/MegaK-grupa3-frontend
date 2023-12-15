import { HrApp } from './HrApp/HrApp.tsx';
import { StudentApp } from './StudentApp/StudentApp.tsx';
import { AdminApp } from './AdminApp/AdminApp';
import { UserContext } from '../contexts/user.context';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from './ProfilePage';
import { LoginPage } from './LoginPage';

export const Root = () => {
	const [user, setUser] = useState({
		userFullName: 'Marta Brylska',
		userId: '1234',
		userRole: 0,
	});

	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<Routes>
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
				{user.userRole === 2 && <HrApp />}
				{user.userRole === 1 && <StudentApp />}
				{user.userRole === 0 && <AdminApp />}
			</UserContext.Provider>
		</>
	);
};
