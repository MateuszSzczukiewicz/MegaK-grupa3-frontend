import { MainTemplate } from '../components/templates/MainTemplate/MainTemplate';
import { StudentDataFormTemplate } from '../components/templates/StudentDataFormTemplate/StudentDataFormTemplate';

export const StudentDataFormPage = () => {
	return (
		<>
			<MainTemplate />
			<StudentDataFormTemplate id={'123'} />
		</>
	);
};
