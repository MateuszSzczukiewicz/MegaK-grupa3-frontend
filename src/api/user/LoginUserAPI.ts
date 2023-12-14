import axios from 'axios';

export const loginUser = async (email: string, pwd: string) => {
	const url = `${import.meta.env.VITE_API_KEY}/auth/login`;
	try {
		const response = await axios.post(url, {
			email,
			pwd,
		});

		if (response.status === 200) {
			const { user } = response.data;
			console.log(user);
			return { success: true, user };
		} else {
			console.error('Unexpected response status:', response.status);
			return { success: false };
		}
	} catch (err) {
		console.error('Error logging user:', err);
		return { success: false };
	}
};
