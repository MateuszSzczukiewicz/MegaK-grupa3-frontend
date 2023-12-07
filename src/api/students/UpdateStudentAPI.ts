import axios, { AxiosResponse } from 'axios';
import { UpdateStudentType } from '../../types/StudentFormType.types.ts';

export const updateStudent = async ({
	id,
	dataForUpdate,
}: {
	id: string;
	dataForUpdate: UpdateStudentType;
}) => {
	console.log(id);
	const url = `${import.meta.env.VITE_API_KEY}/student/${id}`;

	try {
		const response: AxiosResponse = await axios.put(url, dataForUpdate);
		return response.data;
	} catch (err) {
		console.error('Error getting books:', err);
		return [];
	}
};
