import { MainTemplate } from '../components/templates/MainTemplate/MainTemplate';
import { AdminAddHrForm } from '../components/organisms/AdminAddHrForm/AdminAddHrForm';
import { useState } from 'react';
import { AdminPageHeader } from '../components/molecules/AdminPageHeader/AdminPageHeader';

export const AdminPage = () => {
	const [simplified, setSimplified] = useState(true);
	return (
		<>
			<MainTemplate />
			<AdminPageHeader simplified={simplified} setSimplified={setSimplified} />
			{simplified && <AdminAddHrForm />}
			{/*{!simplified && <AdminAddStudents />}*/}
		</>
	);
};
