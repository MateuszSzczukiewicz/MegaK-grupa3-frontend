import { Back1Icon } from '../../../assets/icons/Back1Icon';
import { StyledGoBackElement } from './GoBackElement.styles';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/user.context';
import { useContext } from 'react';

export const GoBackElement = () => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);

	const handleNavigate = () => {
		if (user.userRole === 2) {
			navigate('/students');
		}
		if (user.userRole === 1) {
			navigate('/student');
		}
	};
	return (
		<StyledGoBackElement onClick={handleNavigate}>
			<Back1Icon />
			<p>Wróć</p>
		</StyledGoBackElement>
	);
};
