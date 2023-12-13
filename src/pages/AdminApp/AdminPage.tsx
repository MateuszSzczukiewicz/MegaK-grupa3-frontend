import { useState } from 'react';
import { MainTemplate } from '../../components/templates/MainTemplate/MainTemplate';
import { AdminAddHrForm } from '../../components/organisms/AdminAddHrForm/AdminAddHrForm';
import { AdminPageHeader } from '../../components/molecules/AdminPageHeader/AdminPageHeader';
import { AddStudents } from '../../components/organisms/AddStudents/AddStudents';

export const AdminPage = () => {
	const [simplified, setSimplified] = useState(true);
	return (
		<>
			<MainTemplate studentId={'123'}>
				<AdminPageHeader simplified={simplified} setSimplified={setSimplified} />
				{simplified && <AdminAddHrForm />}
				{!simplified && <AddStudents />}
			</MainTemplate>
		</>
	);
};
