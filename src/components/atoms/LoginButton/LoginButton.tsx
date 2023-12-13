import { StyledButton } from './LoginButton.styles.ts';
import { useNavigate } from 'react-router-dom';

export const LoginButton = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/students');
	};

	return <StyledButton onClick={handleNavigate}>Zaloguj się</StyledButton>;
};
