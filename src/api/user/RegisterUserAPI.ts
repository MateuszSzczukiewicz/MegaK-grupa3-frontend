import axios from 'axios';

export const registerUser = async (userId: string, token: string, password: string) => {
	const url = `${import.meta.env.VITE_API_KEY}/user/activate`;
	try {
		const response = await axios.post(
			url,
			{
				userId,
				token,
				password,
			},
			{
				withCredentials: true,
			},
		);
		return response.data;
	} catch (err) {
		console.error('Error registering user:', err);
	}
};
