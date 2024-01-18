import { useNavigate } from 'react-router-dom';
import { StyledHeader, StyledWrapper, StyledLogo } from './Header.styles.ts';
import Logo from '../../../assets/images/logo.webp';
import { UserElement } from '../../atoms/UserElement/UserElement';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { UserRole } from '../../../types/GetUserResponse.type';

export const Header = () => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const { userRole } = user;

	const handleClick = () => {
		switch (userRole) {
			case UserRole.ADMIN:
				navigate('/admin');
				break;
			case UserRole.STUDENT:
				navigate('/student');
				break;
			case UserRole.HR:
				navigate('/students');
				break;
		}
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
