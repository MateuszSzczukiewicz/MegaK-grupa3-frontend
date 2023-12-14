import { StyledImage, StyledLogin, Wrapper } from '../Login/Login.styles';
import logo from '../../../assets/images/logo.webp';
import { RegisterForm } from '../../molecules/RegisterForm/RegisterForm.tsx';

export const Register = () => {
	return (
		<Wrapper>
			<StyledLogin>
				<StyledImage src={logo} alt="Logo" />
				<RegisterForm />
			</StyledLogin>
		</Wrapper>
	);
};
