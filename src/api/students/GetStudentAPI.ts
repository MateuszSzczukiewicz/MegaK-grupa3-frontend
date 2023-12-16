import axios, { AxiosResponse } from 'axios';

export const getStudent = async (id: string) => {
	const url = `${import.meta.env.VITE_API_KEY}/student/${id}`;

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
