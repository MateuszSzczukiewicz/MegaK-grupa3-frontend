import { Profile } from '../../components/organisms/Profile/Profile.tsx';
import { MainTemplate } from '../../components/templates/MainTemplate/MainTemplate.tsx';

export const ProfilePage = () => {
	return (
		<>
			<MainTemplate>
				<Profile />;
			</MainTemplate>
		</>
	);
};
