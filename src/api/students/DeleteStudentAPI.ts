import { GetUserResponseType } from '../../types/GetUserResponse.type';
import axios from 'axios';

export const deleteStudentAPI = async (studentId: string): Promise<GetUserResponseType> => {
	try {
		const res = await axios.delete(`http://localhost:3000/student/${studentId}`);
		return res.data;
	} catch (err: Error) {
		return {
			message: err.message,
			isSuccess: false,
		};
	}
};
