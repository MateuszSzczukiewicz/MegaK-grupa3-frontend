import { MainTemplate } from '../components/templates/MainTemplate/MainTemplate';
import { StudentDataForm } from '../components/organisms/StudentDataForm/StudentDataForm';

export const StudentDataFormPage = () => {
	return (
		<>
			<MainTemplate />
			<StudentDataForm id={'123'} />
		</>
	);
};
