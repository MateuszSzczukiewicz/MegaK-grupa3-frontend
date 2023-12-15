import { StudentProfile } from '../../components/organisms/StudentProfile/StudentProfile.tsx';
import { MainTemplate } from '../../components/templates/MainTemplate/MainTemplate.tsx';

export const ProfilePage = () => {
	return (
		<>
			<MainTemplate>
				<StudentProfile />;
			</MainTemplate>
		</>
	);
};
