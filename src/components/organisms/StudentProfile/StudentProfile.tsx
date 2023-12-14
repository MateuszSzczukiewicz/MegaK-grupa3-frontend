import { StudentProfileStyle, Wrapper } from './StudentProfile.styles';
import { PasswordChange } from '../../molecules/PasswordChange/PasswordChange';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { DeleteAccount } from '../../atoms/DeleteAccount/DeleteAccount';

export const StudentProfile = () => {
	const { user } = useContext(UserContext);
	return (
		<Wrapper>
			<StudentProfileStyle>
				{user.userRole === 1 && (
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
