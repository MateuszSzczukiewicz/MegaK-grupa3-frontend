import axios from 'axios';

export const getUser = async (userId: string): Promise<any> => {
	try {
		const res = await axios.get(`${import.meta.env.VITE_API_KEY}/user/${userId}`, {
			withCredentials: true,
		});
		return res.data;
	} catch (err: Error) {
		return {
			message: err.message,

			isSuccess: false,
		};
	}
};
