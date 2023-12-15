import { StyledImage, StyledLogin, Wrapper } from './Login.styles.ts';
import logo from '../../../assets/images/logo.webp';
import { LoginForm } from '../../molecules/LoginForm/LoginForm.tsx';
import { AuthButtons } from '../../molecules/AuthButtons/AuthButtons.tsx';

export const Login = ({ onLogin }: { onLogin: (role: number) => void }) => {
	return (
		<Wrapper>
			<StyledLogin>
				<StyledImage src={logo} alt="Logo" />
				<LoginForm onLogin={onLogin} />
				<AuthButtons />
			</StyledLogin>
		</Wrapper>
	);
};
