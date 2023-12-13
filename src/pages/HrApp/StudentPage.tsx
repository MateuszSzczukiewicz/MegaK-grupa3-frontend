import { StudentCVTemplate } from '../../components/templates/StudentCVTemplate/StudentCVTemplate.tsx';
import { MainTemplate } from '../../components/templates/MainTemplate/MainTemplate.tsx';
import { useParams } from 'react-router-dom';

export const StudentPage = () => {
	const { studentId } = useParams();

	return (
		<>
			<MainTemplate studentId={studentId}>
				<StudentCVTemplate studentId={studentId} />
			</MainTemplate>
		</>
	);
};
