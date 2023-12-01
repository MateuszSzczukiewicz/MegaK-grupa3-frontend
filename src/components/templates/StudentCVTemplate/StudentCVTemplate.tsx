import { StudentPrimaryInfo } from '../../organisms/StudentPrimaryInfo/StudentPrimaryInfo';
import { StudentAchievements } from '../../organisms/StudentAchievements/StudentAchievements';

import { ContentWrapper } from './StudentCVTemplate.styles';

export const StudentCVTemplate = () => {
	return (
		<ContentWrapper>
			<StudentPrimaryInfo />
			<StudentAchievements />
		</ContentWrapper>
	);
};
