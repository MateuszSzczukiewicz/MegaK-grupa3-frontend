import axios, { AxiosResponse } from 'axios';
import type { UpdateStudentType } from '../../types/StudentFormType.types.ts';

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
		const response: AxiosResponse = await axios.post(url, dataForUpdate);
		return response.data;
	} catch (err) {
		console.error('Error updating books:', err);
		return [];
	}
};
