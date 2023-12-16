import { HrApp } from './HrApp/HrApp.tsx';
import { AdminApp } from './AdminApp/AdminApp.tsx';
import { StudentApp } from './StudentApp/StudentApp.tsx';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

export const AuthenticatedApp = () => {
	const { user } = useContext(UserContext);
	switch (user.userRole) {
		case 0:
			return <AdminApp />;
		case 1:
			return <StudentApp />;
		case 2:
			return <HrApp />;
		default:
			return null;
	}
};
