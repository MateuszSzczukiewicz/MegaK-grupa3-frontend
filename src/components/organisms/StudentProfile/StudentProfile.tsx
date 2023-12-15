import { StudentProfileStyle, Wrapper } from './StudentProfile.styles';
import { PasswordChange } from '../../molecules/PasswordChange/PasswordChange';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { DeleteAccount } from '../../atoms/DeleteAccount/DeleteAccount';
import { Logout } from '../../atoms/Logout/Logout';

export const StudentProfile = () => {
	const { user } = useContext(UserContext);
	return (
		<Wrapper>
			<StudentProfileStyle>
				<>
					<Logout />
					<hr />
				</>
				{user.userRole == 1 && (
					<>
						<DeleteAccount />
						<hr />
					</>
				)}
				<PasswordChange />
			</StudentProfileStyle>
		</Wrapper>
	);
};
