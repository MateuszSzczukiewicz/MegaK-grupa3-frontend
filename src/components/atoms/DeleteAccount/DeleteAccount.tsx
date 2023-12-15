import { useContext, useState } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { getUser } from '../../../api/users/GetUserAPI';
import { deleteStudent } from '../../../api/students/DeleteStudentAPI';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

export const DeleteAccount = () => {
	const { user } = useContext(UserContext);
	const [info, setInfo] = useState('');

	const deleteAccount = async () => {
		if (window.confirm('Jesteś pewien? Ta zmiana spowoduje usunięcie twojego konta.')) {
			try {
				const dataGetUser = await getUser(user.userId);
				if (user.userRole === 1) {
					const dataDeleteStudent = await deleteStudent(dataGetUser.student.id);
					dataDeleteStudent ? setInfo('Konto zostało usunięte.') : setInfo('Coś poszło nie tak...');
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
			<p>{info}</p>
			<PrimaryButton text={'Usuń konto'} onClick={deleteAccount} />
			<hr />
		</div>
	);
};
