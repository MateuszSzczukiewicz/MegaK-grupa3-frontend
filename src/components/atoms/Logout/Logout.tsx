import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { useContext, useState } from 'react';
import { logoutUser } from '../../../api/users/LogoutUserAPI';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/user.context';

export const Logout = () => {
	const { setUser } = useContext(UserContext);
	const [info, setInfo] = useState('');
	const navigate = useNavigate();

	const logout = async () => {
		try {
			const data = await logoutUser();
			if (data.message === 'logout') {
				setInfo('Zostałeś wylogowany.');
				setUser({
					userFullName: '',
					userId: '',
					userRole: null,
				});
				navigate('/');
			}
		} catch (err) {
			console.error('Error logging out:', err);
		}
	};

	return (
		<div>
			<p>Wyloguj</p>
			<p>{info}</p>
			<PrimaryButton text={'Wyloguj'} onClick={logout} />
			<hr />
		</div>
	);
};
