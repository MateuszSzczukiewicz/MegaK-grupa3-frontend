import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { useState } from 'react';
import { logoutUser } from '../../../api/users/LogoutUserAPI';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
	const [info, setInfo] = useState('');
	const navigate = useNavigate();

	const logout = async () => {
		try {
			const data = await logoutUser();
			if (data.message === 'logout') {
				setInfo('Zostałeś wylogowany.');
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
