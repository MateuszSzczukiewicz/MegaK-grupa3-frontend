import axios, { AxiosResponse } from 'axios';

export const getStudents = async () => {
	const url = `${import.meta.env.VITE_API_KEY}/hr/students`;

	try {
		const response: AxiosResponse = await axios.get(url);
		return response.data.students;
	} catch (err) {
		console.error('Error getting books:', err);
		return [];
	}
};
