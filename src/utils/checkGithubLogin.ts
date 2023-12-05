import axios from 'axios';

export const checkGithubLogin = async (gitHubLogin) => {
	try {
		if (gitHubLogin === '') {
			return true;
		}
		const response = await axios.get(`https://api.github.com/users/${gitHubLogin}`);
		console.log(response);
		return !!response;
	} catch (error) {
		console.log(error);
		return false;
	}
};
