import { StyledUserElement, StyledPhoto, StyledName } from './UserElement.styles';
import { TriangleIcon } from '../../../assets/icons/TriangleIcon';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback, useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { getUserAPI } from '../../../api/users/GetUserAPI';

export const UserElement = () => {
	const navigate = useNavigate();

	const { user } = useContext(UserContext);

	const handleClick = () => {
		navigate('/profile');
	};
	const [gitHubUserName, setGitHubUserName] = useState<string | null>(null);

	const fetchData = useCallback(async () => {
		try {
			const data = await getUserAPI(user.userId);
			setGitHubUserName(data?.student?.gitHubUserName ?? null);
		} catch (err) {
			console.error('Error fetching users:', err);
		}
	}, [user.userId]);

	useEffect(() => {
		(async () => {
			try {
				await fetchData();
				console.log(gitHubUserName);
			} catch (err) {
				console.error('Error in useEffect:', err);
			}
		})();
	}, [fetchData, gitHubUserName]);

	return (
		<StyledUserElement onClick={handleClick}>
			<StyledPhoto $gitHubUserName={gitHubUserName} />
			{user.userFullName && <StyledName>{user.userFullName}</StyledName>}
			<TriangleIcon />
		</StyledUserElement>
	);
};
