import { StyledButton, StyledSpan } from './RegisterButton.styles.ts';
import { useNavigate } from 'react-router-dom';

export const RegisterButton = () => {
	const navigate = useNavigate();

	return (
		<StyledButton onClick={() => navigate('/register')}>
			Nie masz konta? <StyledSpan>Zarejestruj się</StyledSpan>
		</StyledButton>
	);
};
