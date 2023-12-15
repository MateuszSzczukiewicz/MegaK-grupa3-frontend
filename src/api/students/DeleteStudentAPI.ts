import axios from 'axios';

export const deleteStudent = async (studentId: string): Promise<any> => {
	try {
		const res = await axios.delete(`${import.meta.env.VITE_API_KEY}/student/${studentId}`, {
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
