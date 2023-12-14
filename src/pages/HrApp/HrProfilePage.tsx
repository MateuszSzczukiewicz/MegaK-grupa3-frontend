import {
	StudentProfileStyle,
	Wrapper,
} from '../../components/organisms/StudentProfile/StudentProfile.styles';
import { PasswordChange } from '../../components/molecules/PasswordChange/PasswordChange';

export const HrProfile = () => {
	return (
		<Wrapper>
			<StudentProfileStyle>
				<PasswordChange />
			</StudentProfileStyle>
		</Wrapper>
	);
};
// @TODO do usunięcia
