import {
	StudentProfileStyle,
	Wrapper,
} from '../../../components/organisms/StudentProfile/StudentProfile.styles.ts';
import { PasswordChange } from '../../../components/molecules/PasswordChange/PasswordChange.tsx';

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
