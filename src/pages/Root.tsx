import { useState } from 'react';
import { UnauthenticatedApp } from './UnauthenticatedApp/UnauthenticatedApp.tsx';
import { AuthenticatedApp } from './AuthenticatedApp/AuthenticatedApp';

export const Root = () => {
	const [userRole, setUserRole] = useState<number | null>(null);

	if (userRole === null) {
		return <UnauthenticatedApp onLogin={(role) => setUserRole(role)} />;
	} else {
		return <AuthenticatedApp userRole={userRole} />;
	}
};

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
