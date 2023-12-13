import { HrApp } from './HrApp/HrApp.tsx';
import { StudentApp } from './StudentApp/StudentApp.tsx';
import { AdminApp } from './AdminApp/AdminApp';

export const Root = () => {
	return (
		<>
			<HrApp />
			<StudentApp />
			<AdminApp />
		</>
	);
};
