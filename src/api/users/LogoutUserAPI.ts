import axios from 'axios';

export const logoutUser = async (): Promise<any> => {
	try {
		const res = await axios.get(`${import.meta.env.VITE_API_KEY}/auth/logout`);
		return res.data;
	} catch (err: Error) {
		return {
			message: err.message,
			isSuccess: false,
		};
	}
};
