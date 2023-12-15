import { useState } from 'react';
import { UnauthenticatedApp } from './UnauthenticatedApp/UnauthenticatedApp.tsx';
import { AuthenticatedApp } from './AuthenticatedApp/AuthenticatedApp';
import { UserContext } from '../contexts/user.context';

export const Root = () => {
	const [userRole, setUserRole] = useState<number | null>(null);
	const [user, setUser] = useState<{
		userFullName: string;
		userId: string;
		userRole: null | number;
	}>({
		userFullName: '',
		userId: '',
		userRole: null,
	});

	if (userRole === null) {
		return (
			<UserContext.Provider value={{ user, setUser }}>
				<UnauthenticatedApp onLogin={(role) => setUserRole(role)} />
			</UserContext.Provider>
		);
	} else {
		return (
			<UserContext.Provider value={{ user, setUser }}>
				<AuthenticatedApp userRole={userRole} />
			</UserContext.Provider>
		);
	}
};

// const [user, setUser] = useState<{
// 	userFullName: string;
// 	userId: string;
// 	userRole: null | number;
// }>({
// 	userFullName: '',
// 	userId: '',
// 	userRole: null,
// });

// return (
// 	<>
// 		<UserContext.Provider value={{ user, setUser }}>
// 			<Routes>
// 				<Route path="/profile" element={<ProfilePage />} />
// 				<Route path="/login" element={<LoginPage />} />
// 			</Routes>
// 			{user.userRole === 2 && <HrApp />}
// 			{user.userRole === 1 && <StudentApp />}
// 			{user.userRole === 0 && <AdminApp />}
// 		</UserContext.Provider>
// 	</>
// );
