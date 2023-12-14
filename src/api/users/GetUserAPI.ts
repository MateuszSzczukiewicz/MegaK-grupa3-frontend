import axios from 'axios';
import { GetUserResponseType } from '../../types/GetUserResponse.type';

export const getUserAPI = async (userId: string): Promise<any> => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${userId}`);
		return res.data;
	} catch (err: Error) {
		return {
			message: err.message,
			isSuccess: false,
		};
	}
};
