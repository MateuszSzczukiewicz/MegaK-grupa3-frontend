import axios from 'axios';
import { FindOneUserResponse } from '../../types/User.type';

export const getUser = async (
	userId: string,
): Promise<FindOneUserResponse | { message: string; isSuccess: false }> => {
	try {
		const res = await axios.get(`${import.meta.env.VITE_API_KEY}/user/${userId}`, {
			// withCredentials: true,
		});
		return res.data;
	} catch (err: Error) {
		return {
			message: err.message,
			isSuccess: false,
		};
	}
};
