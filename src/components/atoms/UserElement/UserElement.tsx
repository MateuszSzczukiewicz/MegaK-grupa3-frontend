import { StyledUserElement, StyledPhoto, StyledName } from './UserElement.styles';
import { TriangleIcon } from '../../../assets/icons/TriangleIcon';
import { useNavigate } from 'react-router-dom';

export const UserElement = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/profile');
	};

	return (
		<StyledUserElement onClick={handleClick}>
			<StyledPhoto />
			<StyledName>Mateusz Kowalski</StyledName>
			<TriangleIcon />
		</StyledUserElement>
	);
};
