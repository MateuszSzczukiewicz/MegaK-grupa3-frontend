import { useNavigate } from 'react-router-dom';
import { StyledHeader, StyledWrapper, StyledLogo } from './Header.styles.ts';
import Logo from '../../../assets/images/logo.webp';
import { UserElement } from '../../atoms/UserElement/UserElement';

export const Header = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<StyledHeader>
			<StyledWrapper>
				<StyledLogo onClick={handleClick} src={Logo} />
				<UserElement />
			</StyledWrapper>
		</StyledHeader>
	);
};
