import { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { getUserAPI } from '../../../api/users/GetUserAPI';
import { deleteStudentAPI } from '../../../api/students/DeleteStudentAPI';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

export const DeleteAccount = () => {
	const { user } = useContext(UserContext);
	const deleteAccount = async () => {
		if (window.confirm('Jesteś pewien? Ta zmiana spowoduje usunięcie twojego konta.')) {
			try {
				const dataGetUser = await getUserAPI(user.userId);
				if (user.userRole === 1) {
					const dataDeleteStudent = await deleteStudentAPI(dataGetUser.student.id);
					console.log(dataDeleteStudent);
				}
			} catch (err) {
				console.error('Error deleting user:', err);
			}
		} else {
			console.log('Cofam!');
		}
	};
	return (
		<div>
			<p>Usuń konto</p>
			<PrimaryButton text={'Usuń konto'} onClick={deleteAccount} />
			<hr />
		</div>
	);
};
