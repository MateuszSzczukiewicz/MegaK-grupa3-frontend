import axios from 'axios';
import { AddHrType, CreateHrResponse } from '../../types/addHr.type';

export const addHr = async (data: AddHrType): Promise<CreateHrResponse> => {
	try {
		const res = await axios.post(`http://localhost:3000/admin/addHr`, data);
		return res.data;
	} catch (err: Error) {
		return {
			message: err.message,
			isSuccess: false,
		};
	}
};
