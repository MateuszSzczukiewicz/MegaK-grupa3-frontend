import { useState } from 'react';
import { MainTemplate } from '../../../components/templates/MainTemplate/MainTemplate.tsx';
import { AdminAddHrForm } from '../../../components/organisms/AdminAddHrForm/AdminAddHrForm.tsx';
import { AdminPageHeader } from '../../../components/molecules/AdminPageHeader/AdminPageHeader.tsx';
import { AddStudents } from '../../../components/organisms/AddStudents/AddStudents.tsx';
import { AdminPageWrapper } from './AdminPage.styles';

export const AdminPage = () => {
	const [simplified, setSimplified] = useState(true);
	return (
		<>
			<MainTemplate>
				<AdminPageWrapper>
					<AdminPageHeader simplified={simplified} setSimplified={setSimplified} />
					{simplified && <AdminAddHrForm />}
					{!simplified && <AddStudents />}
				</AdminPageWrapper>
			</MainTemplate>
		</>
	);
};
