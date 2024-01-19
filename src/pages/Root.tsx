import { UnauthenticatedApp } from './UnauthenticatedApp/UnauthenticatedApp.tsx';
import { AuthenticatedApp } from './AuthenticatedApp/AuthenticatedApp';
import { UserContext } from '../contexts/user.context';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Root = () => {
	const [user, setUser] = useLocalStorage('user', {
		userFullName: '',
		userId: '',
		userRole: null,
	});
	const { userRole } = user;
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{userRole === null ? <UnauthenticatedApp /> : <AuthenticatedApp />}
		</UserContext.Provider>
	);
};
