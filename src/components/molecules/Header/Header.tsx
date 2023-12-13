import { StyledHeader, StyledWrapper, StyledLogo } from './Header.styles.ts';
import Logo from '../../../assets/images/logo.webp';
import { UserElement } from '../../atoms/UserElement/UserElement';

export const Header = ({ studentId }: { studentId: string | undefined }) => {
	return (
		<StyledHeader>
			<StyledWrapper>
				<StyledLogo src={Logo} />
				<UserElement studentId={studentId} />
			</StyledWrapper>
		</StyledHeader>
	);
};
