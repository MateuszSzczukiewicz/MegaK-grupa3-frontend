import axios from 'axios';
import { ChangePasswordResponse } from '../../types/changePassword.type';

export const changePassword = async (data: {
	userId: string;
	oldPwd: string;
	newPwd: string;
}): Promise<ChangePasswordResponse> => {
	try {
		const res = await axios.patch(`${import.meta.env.VITE_API_KEY}/user/changePwd`, data, {
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
