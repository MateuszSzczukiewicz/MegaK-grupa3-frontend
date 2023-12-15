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
