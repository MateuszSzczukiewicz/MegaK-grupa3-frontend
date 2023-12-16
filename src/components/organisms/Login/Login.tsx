import { StyledImage, StyledLogin, Wrapper } from './Login.styles.ts';
import logo from '../../../assets/images/logo.webp';
import { LoginForm } from '../../molecules/LoginForm/LoginForm.tsx';
import { AuthButtons } from '../../molecules/AuthButtons/AuthButtons.tsx';

export const Login = () => {
	return (
		<Wrapper>
			<StyledLogin>
				<StyledImage src={logo} alt="Logo" />
				<LoginForm />
				<AuthButtons />
			</StyledLogin>
		</Wrapper>
	);
};
