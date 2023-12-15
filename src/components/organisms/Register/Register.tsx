import logo from '../../../assets/images/logo.webp';
import { RegisterForm } from '../../molecules/RegisterForm/RegisterForm.tsx';
import { StyledImage, StyledRegister, Wrapper } from './Register.styles.ts';

export const Register = () => {
	return (
		<Wrapper>
			<StyledRegister>
				<StyledImage src={logo} alt="Logo" />
				<RegisterForm />
			</StyledRegister>
		</Wrapper>
	);
};
