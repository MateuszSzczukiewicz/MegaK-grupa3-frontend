import axios, { AxiosResponse } from 'axios';

export const getStudentsForInterview = async () => {
	const url = `${import.meta.env.VITE_API_KEY}/hr/students/interview`;
	try {
		const response: AxiosResponse = await axios.get(url, {
			withCredentials: true,
		});
		return response.data.students;
	} catch (err) {
		console.error('Error getting students:', err);
		return [];
	}
};
