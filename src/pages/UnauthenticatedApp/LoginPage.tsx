import { Login } from '../../components/organisms/Login/Login.tsx';

export const LoginPage = ({ onLogin }: { onLogin: (role: number) => void }) => {
	return <Login onLogin={onLogin} />;
};
