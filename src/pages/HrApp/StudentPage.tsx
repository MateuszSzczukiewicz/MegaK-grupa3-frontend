import { StudentCVTemplate } from '../../components/templates/StudentCVTemplate/StudentCVTemplate.tsx';
import { MainTemplate } from '../../components/templates/MainTemplate/MainTemplate.tsx';

export const StudentPage = () => {
	return (
		<>
			<MainTemplate>
				<StudentCVTemplate />
			</MainTemplate>
		</>
	);
};
