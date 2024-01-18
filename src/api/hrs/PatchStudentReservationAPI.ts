import axios from 'axios';

export const PatchStudentReservation = async (data: { studentId: string | undefined }) => {
	try {
		const res = await axios.patch(`${import.meta.env.VITE_API_KEY}/hr/students/reservation`, data, {
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
