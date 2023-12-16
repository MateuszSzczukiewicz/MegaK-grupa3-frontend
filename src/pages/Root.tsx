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

	if (user.userRole === null) {
		return (
			<UserContext.Provider value={{ user, setUser }}>
				<UnauthenticatedApp />
			</UserContext.Provider>
		);
	} else {
		return (
			<UserContext.Provider value={{ user, setUser }}>
				<AuthenticatedApp />
			</UserContext.Provider>
		);
	}
};
