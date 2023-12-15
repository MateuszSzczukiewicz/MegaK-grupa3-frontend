import { MainTemplate } from '../../../components/templates/MainTemplate/MainTemplate.tsx';
import { StudentDataForm } from '../../../components/organisms/StudentDataForm/StudentDataForm.tsx';
import { StudentDataFormPageWrapper } from './StudentDataFormPage.styles';
import { PrimaryButton } from '../../../components/atoms/PrimaryButton/PrimaryButton';
import { useCallback, useContext, useEffect, useState } from 'react';
import { getUser } from '../../../api/users/GetUserAPI';
import { UserContext } from '../../../contexts/user.context';
import { useNavigate } from 'react-router-dom';

export const StudentDataFormPage = () => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const [studentId, setStudentId] = useState('');

	const fetchData = useCallback(async () => {
		try {
			const data = await getUser(user.userId);
			if (data.student.id) {
				setStudentId(data.student.id);
			}
		} catch (error) {
			console.error(error);
		}
	}, [user]);

	useEffect(() => {
		(async () => {
			try {
				await fetchData();
			} catch (e) {
				console.error('Error fetching user:', e);
			}
		})();
	}, [fetchData]);

	const handleClick = () => {
		navigate(`/cv/${studentId}`);
	};

	return (
		<MainTemplate>
			<StudentDataFormPageWrapper>
				<PrimaryButton text={'Podgląd CV'} onClick={handleClick} />
				{studentId && <StudentDataForm id={studentId} />}
			</StudentDataFormPageWrapper>
		</MainTemplate>
	);
};
