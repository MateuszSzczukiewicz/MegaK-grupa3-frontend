import { HrApp } from './HrApp/HrApp.tsx';
import { AdminApp } from './AdminApp/AdminApp.tsx';
import { StudentApp } from './StudentApp/StudentApp.tsx';

export const AuthenticatedApp = ({ userRole }: { userRole: number }) => {
	switch (userRole) {
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
