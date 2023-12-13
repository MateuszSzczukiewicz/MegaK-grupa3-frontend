import { Back1Icon } from '../../../assets/icons/Back1Icon';
import { StyledGoBackElement } from './GoBackElement.styles';
import { useNavigate } from 'react-router-dom';

export const GoBackElement = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/students');
	};
	return (
		<StyledGoBackElement onClick={handleNavigate}>
			<Back1Icon />
			<p>Wróć</p>
		</StyledGoBackElement>
	);
};
