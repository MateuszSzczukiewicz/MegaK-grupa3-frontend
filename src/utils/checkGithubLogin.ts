import axios from 'axios';

export const checkGithubLogin = async (gitHubLogin: string) => {
	const url = `https://api.github.com/users/${gitHubLogin}`;

	try {
		if (gitHubLogin === '') {
			return true;
		}
		const response = await axios.get(url);
		console.log(response);
		return !!response;
	} catch (error) {
		console.log(error);
		return false;
	}
};
