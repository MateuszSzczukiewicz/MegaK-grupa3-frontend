import { StyledUserElement, StyledPhoto, StyledName } from './UserElement.styles';
import { TriangleIcon } from '../../../assets/icons/TriangleIcon';

export const UserElement = () => {
	return (
		<StyledUserElement>
			<StyledPhoto />
			<StyledName>Mateusz Kowalski</StyledName>
			<TriangleIcon />
		</StyledUserElement>
	);
};
