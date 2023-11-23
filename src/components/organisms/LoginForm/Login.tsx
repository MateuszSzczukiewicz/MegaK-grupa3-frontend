import { StyledImage, StyledLogin } from './Login.styles.ts';
import logo from '../../../assets/images/logo.webp';
import { LoginForm } from '../../molecules/LoginForm/LoginForm.tsx';

export const Login = () => {
	return (
		<StyledLogin>
			<StyledImage src={logo} alt="Logo" />
			<LoginForm />
		</StyledLogin>
	);
};
