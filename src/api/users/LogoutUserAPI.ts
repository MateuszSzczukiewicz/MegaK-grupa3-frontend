import axios from 'axios';

export const logoutUser = async (): Promise<
	{ error: string } | { message: string; isSuccess?: false }
> => {
	try {
		const res = await axios.get(`${import.meta.env.VITE_API_KEY}/auth/logout`, {
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
