import axios from 'axios';
import { AddHrType, CreateHrResponse } from '../../types/addHr.type';

export const addHr = async (data: AddHrType): Promise<CreateHrResponse> => {
	try {
		const res = await axios.post(`${import.meta.env.VITE_API_KEY}/admin/addHr`, data, {
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
