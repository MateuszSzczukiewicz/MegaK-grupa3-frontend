import axios from 'axios';
import { ChangePasswordResponse, ChangePasswordType } from '../../types/changePassword.type';

export const changePassword = async (
	userId: string,
	data: ChangePasswordType,
): Promise<ChangePasswordResponse> => {
	try {
		const res = await axios.post(`${import.meta.env.VITE_API_KEY}/user/${userId}`, data);
		return res.data;
	} catch (err: Error) {
		return {
			message: err.message,
			isSuccess: false,
		};
	}
};
