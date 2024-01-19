import { ProfileStyle, Wrapper } from './Profile.styles';
import { PasswordChange } from '../../molecules/PasswordChange/PasswordChange';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { DeleteAccount } from '../../atoms/DeleteAccount/DeleteAccount';
import { Logout } from '../../atoms/Logout/Logout';
import { UserRole } from '../../../types/GetUserResponse.type';

export const Profile = () => {
	const { user } = useContext(UserContext);
	return (
		<Wrapper>
			<ProfileStyle>
				<>
					<Logout />
					<hr />
				</>
				{user.userRole === UserRole.STUDENT && (
					<>
						<DeleteAccount />
						<hr />
					</>
				)}
				<PasswordChange />
			</ProfileStyle>
		</Wrapper>
	);
};
