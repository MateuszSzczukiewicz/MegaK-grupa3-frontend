import axios, { AxiosResponse } from 'axios';

export const getStudentCV = async (id: string | undefined) => {
	const url = `${import.meta.env.VITE_API_KEY}/hr/students/cv/${id}`;

	try {
		const response: AxiosResponse = await axios.get(url, {
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		console.error('Error getting student:', err);
		return [];
	}
};
