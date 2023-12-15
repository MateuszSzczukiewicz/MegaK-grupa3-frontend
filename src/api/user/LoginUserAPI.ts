import axios from 'axios';

export const loginUser = async (email: string, pwd: string) => {
	const url = `${import.meta.env.VITE_API_KEY}/auth/login`;
	try {
		const response = await axios.post(url, {
			email,
			pwd,
		});

		if (response.status === 201) {
			return response.data;
		} else {
			return { isSuccess: false };
		}
	} catch (err) {
		console.error('Error logging user:', err);
		return { isSuccess: false };
	}
};
