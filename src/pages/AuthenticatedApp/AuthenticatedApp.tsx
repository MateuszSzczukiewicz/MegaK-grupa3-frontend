import { HrApp } from './HrApp/HrApp.tsx';
import { AdminApp } from './AdminApp/AdminApp.tsx';
import { StudentApp } from './StudentApp/StudentApp.tsx';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { UserRole } from '../../types/GetUserResponse.type';

export const AuthenticatedApp = () => {
	const { user } = useContext(UserContext);
	switch (user.userRole) {
		case UserRole.ADMIN:
			return <AdminApp />;
		case UserRole.STUDENT:
			return <StudentApp />;
		case UserRole.HR:
			return <HrApp />;
		default:
			return null;
	}
};
