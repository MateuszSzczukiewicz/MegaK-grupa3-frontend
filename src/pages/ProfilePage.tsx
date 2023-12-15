import { StudentProfile } from '../components/organisms/StudentProfile/StudentProfile';
import { MainTemplate } from '../components/templates/MainTemplate/MainTemplate';

export const ProfilePage = () => {
	return (
		<>
			<MainTemplate>
				<StudentProfile />;
			</MainTemplate>
		</>
	);
};
